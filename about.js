function calculateCost() {
    let area = parseFloat(document.getElementById("area").value);
    let designType = document.getElementById("designType").value;
    let plants = parseFloat(document.getElementById("plants").value);

    // Базовые цены (в рублях)
    let baseCostPerSqm = 0;
    let plantCost = 500; // Стоимость одного растения
  
    switch (designType) {
      case "basic":
        baseCostPerSqm = 500;
        break;
      case "standard":
        baseCostPerSqm = 1500;
        break;
      case "premium":
        baseCostPerSqm = 5000;
        break;
    }
  
    // Расчет стоимости
    let totalCost = (area * baseCostPerSqm) + (plants * plantCost);
  
    // Вывод результата
    document.getElementById("cost").innerHTML = `Примерная стоимость: ${totalCost} руб.`;
  }