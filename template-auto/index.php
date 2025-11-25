<?php
// --- ZONE DE DÉBOGAGE (A supprimer une fois que ça marche) ---
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// -------------------------------------------------------------

$file = 'data.json';

// 1. AUTO-RÉPARATION : Si le fichier data n'existe pas, on le crée avec des données par défaut
if (!file_exists($file)) {
    $default_data = [
        "km_actuel" => "0",
        "prochaine_vidange" => "10000",
        "date_limite" => date('Y-m-d', strtotime('+1 year')),
        "huile" => "Non défini",
        "filtre_huile" => "-",
        "filtre_air" => "-",
        "note_mecano" => "Bienvenue ! Utilisez l'accès garagiste pour configurer."
    ];
    file_put_contents($file, json_encode($default_data, JSON_PRETTY_PRINT));
}

// 2. CHARGEMENT
$json_content = file_get_contents($file);
$data = json_decode($json_content, true);

// Vérification si le JSON est valide
if ($data === null) {
    die("Erreur : Le fichier data.json contient une erreur de syntaxe ou est vide.");
}

// 3. CALCULS
$km_now = (int)str_replace(' ', '', $data['km_actuel']);
$km_next = (int)str_replace(' ', '', $data['prochaine_vidange']);
$km_restant = $km_next - $km_now;

$cycle = 10000; 
$pourcentage = 100 - (($km_restant / $cycle) * 100);

if($pourcentage > 100) $pourcentage = 100;
if($pourcentage < 0) $pourcentage = 0;

$bar_color = "#27ae60"; 
if($km_restant < 2000) $bar_color = "#f1c40f"; 
if($km_restant < 500) $bar_color = "#e74c3c"; 
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carnet Entretien</title>
    <style>
        /* --- STYLE IDENTIQUE --- */
        body { font-family: sans-serif; background: #f0f2f5; margin: 0; padding: 20px; padding-bottom: 80px; }
        .container { max-width: 480px; margin: 0 auto; }
        .vehicle-header { background: white; padding: 15px; border-radius: 12px; display: flex; align-items: center; margin-bottom: 20px; }
        .status-card { background: #2c3e50; color: white; padding: 20px; border-radius: 15px; text-align: center; margin-bottom: 20px; }
        .next-km { font-size: 30px; font-weight: bold; color: #f1c40f; margin: 10px 0; }
        .progress-bg { background: rgba(255,255,255,0.2); height: 10px; border-radius: 5px; margin-top: 10px; }
        .progress-bar { height: 100%; border-radius: 5px; transition: width 0.5s; }
        .tech-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .tech-item { background: white; padding: 10px; border-radius: 8px; font-size: 14px; }
        footer { text-align: center; margin-top: 30px; font-size: 12px; color: #888; }
        a { color: #888; text-decoration: none; }
    </style>
</head>
<body>

<div class="container">
    <div class="vehicle-header">
        <h1 style="margin:0; font-size:18px;">Mon Véhicule (<?php echo $data['km_actuel']; ?> km)</h1>
    </div>

    <div class="status-card">
        <div>Prochaine Vidange :</div>
        <div class="next-km"><?php echo $data['prochaine_vidange']; ?> KM</div>
        <div>ou le <?php echo $data['date_limite']; ?></div>
        
        <div class="progress-bg">
            <div class="progress-bar" style="width: <?php echo $pourcentage; ?>%; background-color: <?php echo $bar_color; ?>;"></div>
        </div>
        <div style="font-size: 12px; margin-top: 5px;">Reste : <?php echo $km_restant; ?> km</div>
    </div>

    <div class="tech-grid">
        <div class="tech-item"><strong>Huile:</strong><br><?php echo $data['huile']; ?></div>
        <div class="tech-item"><strong>Filtre Huile:</strong><br><?php echo $data['filtre_huile']; ?></div>
        <div class="tech-item"><strong>Filtre Air:</strong><br><?php echo $data['filtre_air']; ?></div>
    </div>

    <?php if(!empty($data['note_mecano'])): ?>
    <div style="background:#fff3cd; padding:10px; border-radius:8px; margin-top:15px; font-size:14px;">
        Note: <?php echo $data['note_mecano']; ?>
    </div>
    <?php endif; ?>

    <footer>
        <a href="admin.php">Accès Garagiste</a>
    </footer>
</div>

</body>
</html>
