<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox Test</title>
</head>
<body>
    <form method="post" action="">
        <label>
            <input type="checkbox" name="checkbox1" value="1"> Checkbox 1
        </label>
        <br>
        <label>
            <input type="checkbox" name="checkbox2" value="2"> Checkbox 2
        </label>
        <br>
        <label>
            <input type="checkbox" name="checkbox3" value="3"> Checkbox 3
        </label>
        <br>
        <input type="submit" value="Submit">
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $checked = [];
        if (isset($_POST['checkbox1'])) {
            $checked[] = $_POST['checkbox1'];
        }
        if (isset($_POST['checkbox2'])) {
            $checked[] = $_POST['checkbox2'];
        }
        if (isset($_POST['checkbox3'])) {
            $checked[] = $_POST['checkbox3'];
        }

        if (!empty($checked)) {
            echo "Checked checkboxes: " . implode(", ", $checked);
        } else {
            echo "No checkboxes are checked!";
        }
    }
    ?>
</body>
</html>
