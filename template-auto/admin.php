<?php
// Mot de passe simple pour le garagiste
$password_garagiste = "meca123"; 

// Traitement du formulaire
$message = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['password'] === $password_garagiste) {
        // Récupérer les nouvelles données
        $nouvelles_donnees = [
            "km_actuel" => $_POST['km_actuel'],
            "prochaine_vidange" => $_POST['prochaine_vidange'],
            "date_limite" => $_POST['date_limite'],
            "huile" => $_POST['huile'],
            "filtre_huile" => $_POST['filtre_huile'],
            "filtre_air" => $_POST['filtre_air'],
            "note_mecano" => $_POST['note_mecano']
        ];
        // Sauvegarder dans le fichier JSON
        file_put_contents('data.json', json_encode($nouvelles_donnees, JSON_PRETTY_PRINT));
        $message = "✅ Mise à jour réussie !";
    } else {
        $message = "❌ Mot de passe incorrect.";
    }
}

// Lire les données actuelles pour pré-remplir le formulaire
$data = json_decode(file_get_contents('data.json'), true);
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Espace Garagiste</title>
    <style>
        body { font-family: sans-serif; padding: 20px; background: #f4f4f4; }
        input, textarea { width: 100%; padding: 10px; margin: 5px 0 15px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;}
        button { width: 100%; padding: 15px; background: #2980b9; color: white; border: none; border-radius: 5px; font-size: 16px; font-weight: bold;}
        .alert { color: green; font-weight: bold; text-align: center; margin-bottom: 10px; }
    </style>
</head>
<body>

    <h2>🔧 Mise à jour Entretien</h2>
    
    <?php if($message) echo "<div class='alert'>$message</div>"; ?>

    <form method="POST">
        <label>Mot de passe Garagiste :</label>
        <input type="password" name="password" placeholder="Code secret..." required>
        
        <hr>

        <label>KM Compteur Actuel :</label>
        <input type="text" name="km_actuel" value="<?php echo $data['km_actuel']; ?>">

        <label>Prochaine Vidange (KM) :</label>
        <input type="text" name="prochaine_vidange" value="<?php echo $data['prochaine_vidange']; ?>">

        <label>Date Limite :</label>
        <input type="date" name="date_limite" value="<?php echo $data['date_limite']; ?>">

        <label>Type Huile :</label>
        <input type="text" name="huile" value="<?php echo $data['huile']; ?>">

        <label>Ref Filtre Huile :</label>
        <input type="text" name="filtre_huile" value="<?php echo $data['filtre_huile']; ?>">
        
        <label>Note / Observation :</label>
        <textarea name="note_mecano"><?php echo $data['note_mecano']; ?></textarea>

        <button type="submit">Enregistrer la Vidange</button>
    </form>
    
    <p style="text-align:center; margin-top:20px;"><a href="index.php">Voir le Carnet Client</a></p>

</body>
</html>
