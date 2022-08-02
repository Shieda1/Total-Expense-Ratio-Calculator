// https://calculator.swiftutors.com/total-expense-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const totalExpenseRatioRadio = document.getElementById('totalExpenseRatioRadio');
const totalFundCostsRadio = document.getElementById('totalFundCostsRadio');
const totalFundAssetsRadio = document.getElementById('totalFundAssetsRadio');

let totalExpenseRatio;
let totalFundCosts = v1;
let totalFundAssets = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

totalExpenseRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Fund Costs';
  variable2.textContent = 'Total Fund Assets';
  totalFundCosts = v1;
  totalFundAssets = v2;
  result.textContent = '';
});

totalFundCostsRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Expense Ratio';
  variable2.textContent = 'Total Fund Assets';
  totalExpenseRatio = v1;
  totalFundAssets = v2;
  result.textContent = '';
});

totalFundAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Expense Ratio';
  variable2.textContent = 'Total Fund Costs';
  totalExpenseRatio = v1;
  totalFundCosts = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(totalExpenseRatioRadio.checked)
    result.textContent = `Total Expense Ratio = ${computeTotalExpenseRatio().toFixed(2)}`;

  else if(totalFundCostsRadio.checked)
    result.textContent = `Total Fund Costs = ${computeTotalFundCosts().toFixed(2)}`;

  else if(totalFundAssetsRadio.checked)
    result.textContent = `Total Fund Assets = ${computeTotalFundAssets().toFixed(2)}`;
})

// calculation

function computeTotalExpenseRatio() {
  return Number(totalFundCosts.value) / Number(totalFundAssets.value);
}

function computeTotalFundCosts() {
  return Number(totalExpenseRatio.value) * Number(totalFundAssets.value);
}

function computeTotalFundAssets() {
  return Number(totalFundCosts.value) / Number(totalExpenseRatio.value);
}