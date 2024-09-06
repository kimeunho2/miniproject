const sellingPriceEl = document.querySelector(".selling-price");
const conversionsEl = document.querySelector(".conversions");
const salesEl = document.querySelector(".sales");

const adspendEl = document.querySelector(".ad-spend");
const roasEl = document.querySelector(".roas");

const constPriceEl = document.querySelector(".cost-price");
const roiEl = document.querySelector(".roi");

const netProfit = document.querySelector(".net-profit");



//계산하기 버튼 가져오기
const calculateButton = document.getElementById("calculate-btn");


const getSales = (sellingPrice, conversions) => {
    return sellingPrice * conversions;
} 

const getRoas = (salesResult, adspend) => {
    return salesResult / adspend * 100;
}

const getRoi = (constPrice, conversions, adspend) => {
    return constPrice * conversions / adspend * 100;
}

const getNetprofit = (salesResult, adspend) => {
    return salesResult-adspend;
}

//계산하기 버튼 클릭 시 실행되는 함수
calculateButton.addEventListener("click", () => {
    const salesResult = getSales(sellingPriceEl.value, conversionsEl.value);
    
    const roasResult = getRoas(salesResult, adspendEl.value);

    const roiResult = getRoi(constPriceEl.value, conversionsEl.value, adspendEl.value );

    const netProfitresult = getNetprofit(salesResult, adspendEl.value);
    
    
    
    
    
    
    salesEl.innerText = salesResult + " 원";   
    roasEl.innerText = (roasResult ?roasResult:0) + "%";
    roiEl.innerText = (roiResult ?roiResult:0)+ "%";
    netProfit.innerText = netProfitresult + " 원";
});




// 판매가 * 전환수 계산하는 함수
const getSaleAll = (a, b) => {
    return a * b;
}



//계산하기 버튼 클릭 시 실행되는 함수
calculateButton.addEventListener("click", () => {
    
    const sellingPriceEls = document.querySelectorAll(".selling-price");
    const conversionsEls = document.querySelectorAll(".conversions");
    const salesEls = document.querySelectorAll(".sales");
    const adSpendEls = document.querySelectorAll(".ad-spend");
    const roasEls = document.querySelectorAll(".roas");
    const roiEls = document.querySelectorAll(".roi");
    const costpriceEls = document.querySelectorAll(".cost-price");
    const netProfitEls = document.querySelectorAll(".net-profit")

    for (let i = 0; i < sellingPriceEls.length; i++) {

    const sellingPrices = sellingPriceEls[i];
    const conversions = conversionsEls[i];
    const sales = salesEls[i];
    const adSpend = adSpendEls[i];
    const roas = roasEls[i];
    const rois = roiEls[i];
    const costprices = costpriceEls[i];
    const netprofit = netProfitEls[i];
    

    const salesResult = getSaleAll(sellingPrices.value, conversions.value);
    
    const roasResult = getRoas(salesResult, adSpend.value);
    
    const roiResult = getRoi(costprices.value, conversions.value, adSpend.value );

    const netprofitresult = getNetprofit (salesResult, adSpend.value);

    sales.innerText = salesResult + " 원";
    roas.innerText = roasResult + "%";
    rois.innerText = roiResult + "%";
    netprofit.innerText = netprofitresult + " 원";
    }


    // 판매가의 모든 열을 가져오기

    const salesList = []

  

    
    

      
    
})










// 행 추가 버튼 가져오기
const addrowButton = document.getElementById("add-row-btn");

//행 추가 버튼 클릭 시 실행하는 함수
addrowButton.addEventListener("click", () => {
 
    // 계산기의 2행 요소를 가져오는 변수 생성    
    const table = document.getElementById("calculatorTable").getElementsByTagName('tbody')[0];

    //테이블 행 요소 아래에 행 추가하는 변수 생성
    const newRow = table.insertRow();

    //추가한 행의 첫번째 셀을 추가한 걸 담는 변수 생성
    const productnameCell = newRow.insertCell(0);

    // 인풋으로 추가한 걸 변수로 담기 
    const productInput = document.createElement("input");

    // 인풋으로 추가하는 변수의 인풋 타입을 '텍스트'로 변경
    productInput.type = "text";

    // 인풋으로 추가한 변수의 인풋의 초기 텍스트를 '상품명'으로 입력
    productInput.placeholder = "상품명";

    //클래스와 클래스명을 생성
    productInput.className = "product-name";

    //행 추가 버튼 클릭시, 행이 추가되면서 첫 번째 행의 첫 셀을 "인풋 요소, 텍스트 타입, 초기 입력값을 상품명, 클래스 이름을 product-name으로 추가"
    productnameCell.appendChild(productInput);



    const placeholders = ["판매가", "원가", "광고비", "전환수"];
    const classes = ["selling-price", "cost-price", "ad-spend", "conversions"];
    
    for (let i = 1; i <= 4; i++) {
        const cell = newRow.insertCell(i);
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = placeholders[i-1];
        input.className = classes[i-1];
        cell.appendChild(input);
    }

    newRow.insertCell(5).className = "sales";  // 매출
    newRow.insertCell(6).className = "roas";   // ROAS
    newRow.insertCell(7).className = "roi";    // ROI
    newRow.insertCell(8).className = "net-profit"; // 순이익
});

