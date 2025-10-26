body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    text-align: center;
    margin: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.crucigrama {
    margin: 20px auto;
    border-collapse: collapse;
}

.crucigrama td {
    width: 50px;
    height: 50px;
    border: 2px solid #333;
    text-align: center;
    vertical-align: middle;
    position: relative;
    background-color: #fff;
}

.crucigrama td.noCaja {
    background-color: #333;
}

.crucigrama input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 20px;
    border: none;
    outline: none;
    text-transform: uppercase;
}

.numero {
    position: absolute;
    top: 1px;
    left: 3px;
    font-size: 12px;
    color: #555;
}

.correcto input {
    background-color: #90ee90;
    font-weight: bold;
}

.definiciones {
    margin-top: 20px;
    text-align: center;
}

.instrucciones {
    font-size: 16px;
    margin-bottom: 10px;
}

.puntaje {
    font-size: 18px;
    font-weight: bold;
}
