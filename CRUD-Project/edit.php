<?php
include_once("config.php");

$id = $_GET['id'];

$sql = "SELECT * FROM users where id=:id";

$editUsers = $connect->prepare($sql);

$editUsers->bindParam(':id', $id);

$editUsers->execute();

$data = $editUsers->fetch();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
    <div class="container">
        <form>
        <div class="col-md-6">
            <label for="inputId" class="form-label">Id</label>
            <input type="text" class="form-control" id="inputUsername" value="<?php echo $data['id'] ?>">
        </div>

        <div class="col-md-6">
            <label for="inputUsername" class="form-label">Username</label>
            <input type="text" class="form-control" id="inputUsername" value="<?php echo $data['username'] ?>">
        </div>

        <div class="col-md-6">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" value="<?php echo $data['name'] ?>">
        </div>

        <div class="col-md-6">
            <label for="inputSurname" class="form-label">Surname</label>
            <input type="text" class="form-control" id="inputSurname" value="<?php echo $data['surname'] ?>">
        </div>

        <div class="col-md-6">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="text" class="form-control" id="inputEmail" value="<?php echo $data['email'] ?>">
        </div>

        <div class="col-md-6">
            <button type="submit" name="update">Update</button>
        </div>
        
        </form>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
</body>
</html>