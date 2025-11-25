<?php
// 1. CHARGEMENT DES DONNÉES
// On lit le fichier JSON pour récupérer les infos
$json_data = file_get_contents('data.json');
$data = json_decode($json_data, true);

// 2. CALCUL AUTOMATIQUE DE LA BARRE DE PROGRESSION
// On nettoie les espaces (ex: "120 000" devient 120000 pour le calcul)
$km_now = (int)str_replace(' ', '', $data['km_actuel']);
$km_next = (int)str_replace(' ', '', $data['prochaine_vidange']);

// Combien de km il reste avant la vidange
$km_restant = $km_next - $km_now;

// Calcul du pourcentage pour la barre visuelle (base de 10 000km par cycle)
// Si on est proche, la barre est pleine.
$cycle = 10000; 
$pourcentage = 100 - (($km_restant / $cycle) * 100);

// Limites visuelles (pas moins de 0%, pas plus de 100%)
if($pourcentage > 100) $pourcentage = 100;
if($pourcentage < 0) $pourcentage = 0;

// Couleur de la barre : Rouge si urgence (< 1000km), Jaune sinon, Vert si tout va bien
$bar_color = "#27ae60"; // Vert
if($km_restant < 2000) $bar_color = "#f1c40f"; // Jaune
if($km_restant < 500) $bar_color = "#e74c3c"; // Rouge
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carnet Entretien</title>
    <style>
        /* --- MÊME STYLE QUE PRÉCÉDEMMENT --- */
        :root {
            --primary-bg: #f0f2f5;
            --card-bg: #ffffff;
            --text-main: #1a1a1a;
            --text-light: #6e6e6e;
            --brand-color: #2980b9; 
            --mono-font: 'Courier New', Courier, monospace;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--primary-bg);
            color: var(--text-main);
            margin: 0; padding: 0; padding-bottom: 80px;
        }

        .container { max-width: 480px; margin: 0 auto; padding: 20px; }

        .vehicle-header {
            display: flex; align-items: center; margin-bottom: 20px;
            background: var(--card-bg); padding: 15px; border-radius: 12px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .brand-logo { width: 50px; height: 50px; background-color: #333; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; }
        .vehicle-info h1 { margin: 0; font-size: 18px; }
        .vehicle-info p { margin: 0; color: var(--text-light); font-size: 14px; }
        
        .status-card {
            background: linear-gradient(135deg, #2c3e50, #000000);
            color: white; border-radius: 16px; padding: 25px; text-align: center;
            margin-bottom: 25px; box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .next-km { font-size: 32px; font-weight: bold; font-family: var(--mono-font); margin: 10px 0; color: #f1c40f; }
        
        .progress-container { background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px; margin-top: 15px; }
        .progress-bar { height: 100%; border-radius: 4px; transition: width 1s ease-in-out; }

        .tech-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 25px; }
        .tech-item { background: var(--card-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--brand-color); }
        .tech-label { font-size: 11px; color: var(--text-light); text-transform: uppercase; }
        .tech-value { font-weight: bold; font-size: 14px; }

        .note-box { background: #fff3cd; color: #856404; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-size: 14px; border-left: 4px solid #ffeeba; }

        footer { text-align: center; font-size: 11px; color: #aaa; margin-top: 30px; }
        .admin-link { color: #eee; text-decoration: none; } /* Lien quasi invisible */
    </style>
</head>
<body>

<div class="container">

    <div class="vehicle-header">
        <div class="brand-logo">AUTO</div>
        <div class="vehicle-info">
            <h1>Véhicule Client</h1>
            <p>Carnet Numérique</p>
        </div>
    </div>

    <div class="status-card">
        <div class="status-label">Prochaine Vidange À</div>
        
        <div class="next-km"><?php echo $data['prochaine_vidange']; ?> KM</div>
        
        <div class="date-limit">ou avant le <?php echo date("d/m/Y", strtotime($data['date_limite'])); ?></div>
        
        <div class="progress-container">
            <div class="progress-bar" style="width: <?php echo $pourcentage; ?>%; background-color: <?php echo $bar_color; ?>;"></div>
        </div>
        
        <p style="font-size: 12px; margin-top: 10px; margin-bottom: 0;">
            Compteur actuel : <?php echo $data['km_actuel']; ?> KM<br>
            (Reste <strong><?php echo $km_restant; ?> KM</strong>)
        </p>
    </div>

    <?php if(!empty($data['note_mecano'])): ?>
    <div class="note-box">
        <strong>Note du Garagiste :</strong><br>
        <?php echo $data['note_mecano']; ?>
    </div>
    <?php endif; ?>

    <div class="tech-grid">
        <div class="tech-item">
            <div class="tech-label">Huile Moteur</div>
            <div class="tech-value"><?php echo $data['huile']; ?></div>
        </div>
        <div class="tech-item">
            <div class="tech-label">Filtre Huile</div>
            <div class="tech-value"><?php echo $data['filtre_huile']; ?></div>
        </div>
        <div class="tech-item">
            <div class="tech-label">Filtre Air</div>
            <div class="tech-value"><?php echo $data['filtre_air']; ?></div>
        </div>
        <div class="tech-item">
            <div class="tech-label">Dernière MàJ</div>
            <div class="tech-value"><?php echo date("d/m/Y"); ?></div>
        </div>
    </div>

    <footer>
        <p>Propulsé par <strong>Madilium</strong></p>
        <p><a href="admin.php" class="admin-link">Accès Garagiste</a></p>
    </footer>

</div>

</body>
</html>
