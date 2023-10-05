const show_jenisSampah = ()=>{
    $.ajax({
        type: 'GET', 
        url:url+'/jenis_sampah/show', 
        dataType: 'json',
        success: function (data) { 
        data.forEach(hasil => {
            $('#jenis_sampah_id').append('<option value="'+hasil.id+'">'+hasil.name+'</option>')
        });
        }
        
    });
}

show_jenisSampah();

$(document).on('keyup','#jumlah_kg',function(){
    let js_id= $('#jenis_sampah_id').val();
    
    $.ajax({
        type: 'GET', 
        url:url+'/jenis_sampah/show/'+js_id, 
        dataType: 'json',
        success: function (data) { 
        let harga = data.harga;
        const total_harga = harga * $('#jumlah_kg').val();
        $('#total_biaya').val(total_harga);
        }
        
    });
});

$("#form-input-riwayat").on("submit", function(e) {
    
    e.preventDefault();
    $.ajax({
        url: $(this).attr("action"),
        method: $(this).attr("method"),
        data: new FormData(this),
        processData: false,
        dataType: "json",
        contentType: false,
        beforeSend: function () {
            $(document).find("span.text-danger").text("");
            $(".is-invalid").removeClass("is-invalid");
        },
        success: function (data) {
           console.log(data);
            if (data.status == 0) {
                $.each(data.error, function (prefix, val) {
                    $("input[name='"+prefix+"']").addClass("is-invalid");
                    $("select[name='"+prefix+"']").addClass("is-invalid");
                    $("textarea[name='"+prefix+"']").addClass("is-invalid");
                    $("span." + prefix + "_error").text(val[0]);
                   
                });
            } else {
                
                toastr.success(data.message);
                
            }
        },
    });
});