document.getElementById('saveImage').addEventListener('click', function() {
    const transactionDate = document.getElementById('transactionDate').value || "-"
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const User = document.getElementById('User').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const Memo = document.getElementById('Memo').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/AM/blob/main/am1.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 105px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);" id="companyNameDisplay">${document.getElementById('companyName').innerText}</p>
                <p style="position: absolute; top: 125px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 80%;" id="companyNameEngDisplay">${document.getElementById('companyNameEng').innerText}</p>
                <p style="position: absolute; top: 145px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 80%;" id="companyAddressDisplay">${document.getElementById('companyAddress').innerText}</p>

                <p style="position: absolute; top: 40px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่ 12983/2567</p>     
                
                <p style="position: absolute; top: 180px; left: 500px; color:#656565; font-size: 20px; font-weight: bold;">${transactionDate}</p>     
                <p style="position: absolute; top: 218px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรื่อง: ไม่ได้บันทึกช่วยจำตามที่แจ้ง</p>     
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรียน ${accountNumber}</p>     
                
                <p style="position: absolute; top: 290px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                จากการที่สมาชิกไม่ได้ทำตามแผนบันทึกช่วยจำกิจกรรมงานสุดท้ายตามที่ระบบกำหนด ทำให้ระบบได้รับ
ความเสียหาย ทางระบบจึงขอให้สมาชิกทำการซ่อมบิลโดยการสั่งซื้อใหม่จำนวน ${amount} บาท หลังทำการซ่อมเสร็จสิ้น
ตามที่ระบบแจ้ง สมาชิกสามารถถอนทุนและกำไรได้ทั้งหมด 
                </p>     

                <p style="position: absolute; top: 390px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                แผนการซ่อมบิลของยูสเซอร์ ${User} <br>
                รหัสแผนการสั่งซื้อใหม่หนึ่งแผนสามครั้ง(271936)<br>
                ต้องทำการสั่งซื้อสินค้าให้เสร็จภายใน 2 ชั่วโมง
                </p>     


                <p style="position: absolute; top: 490px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                ทาง TRON SERVICE ได้วางเงินประกันจำนวนเงินไว้กับแพลตฟอร์มของเราเรียบร้อยแล้ว 
ประกันว่าหากสมาชิกไม่ได้รับเงินสำรองและค่าตอบแทน เรายินดีคืนเงินให้ และรับประกันรายได้ที่มั่นคง 
แผนซ่อมบิลคำสั่งซื้อใหม่แต่ละครั้งเป็นเงิน ${amount} บาท บันทึกช่วยจำ${Memo}
                </p>     
                
                <p style="position: absolute; top: 580px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                หมายเหตุ: หลังจากทำการซ่อมบิลตามที่ระบบแจ้งเรียบร้อยแล้ว สมาชิกจะได้รับเงินคืนพร้อมกำไรทั้งหมด
ภายในเวลาอันรวดเร็ว
                </p>     
                
                <p style="position: absolute; top: 730px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);" id="companyName1Display">(${document.getElementById('companyName1').innerText})</p>
                <p style="position: absolute; top: 835px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 40%;" id="companyNameDisplay">ผู้จัดการ ${document.getElementById('companyName').innerText}</p>
                <p style="position: absolute; top: 860px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ออก ณ วันที่ ${transactionDate}</p>   
              </div>
        </body>
        </html>
    `);
});

document.getElementById('editCompanyInfo').addEventListener('click', function() {
    document.getElementById('editCompanyModal').style.display = 'block';
});

document.getElementById('saveCompanyInfo').addEventListener('click', function() {
    const newCompanyName = document.getElementById('newCompanyName').value;
    const newCompanyNameEng = document.getElementById('newCompanyNameEng').value;
    const newCompanyAddress = document.getElementById('newCompanyAddress').value;
    const newCompanyName1 = document.getElementById('newCompanyName1').value;

    if (newCompanyName) {
        document.getElementById('companyName').innerText = newCompanyName;
    }
    if (newCompanyNameEng) {
        document.getElementById('companyNameEng').innerText = newCompanyNameEng;
    }
    if (newCompanyAddress) {
        document.getElementById('companyAddress').innerText = newCompanyAddress;
    }
    if (newCompanyName1) {
        document.getElementById('companyName1').innerText = newCompanyName1;
    }
    document.getElementById('editCompanyModal').style.display = 'none';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('editCompanyModal').style.display = 'none';
});
