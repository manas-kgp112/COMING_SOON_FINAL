$('#eadForm').submit((e)=>
                 {
   
		 e.preventDefault();
			var name = $('#name1').val();
			var email = $('#email1').val();
			var mobile = $('#mobile1').val();
			var city = $('#city1').val();
			var startup = $('#startup1').val();
      var college=$('#college').val();
  			var referral_code=$('#referral_code').val();
  			// var loan_type = $('#eloan').val();
       var source=$('#source').val();


// 			var stage = $('#stage').val();
// 			var startup_name = $('#startup_name').val();
// 			var fundr = $('#fundr').val();
// 			var loan = $('#loan').val();
  
// 			var description = $('#description').val();
			// var events = $('.events').val();
// 			 var events ="";
//             $.each($("input[name='events']:checked"), function(){            
//                 events+=($(this).val());
//             });
// 			var lfunds = $('#lfunds').val();
// 			var pitchdeck = $('#pitchdeck').val();
// 			var sector = $('#sector').val();
			$.ajax({
				url: 'https://api.ecell-iitkgp.org/forms/eadform/' ,
				method: 'POST',
				data: {
					name: name,
					email: email,
					mobile: mobile, 
					city: city, 
          college:college,
					startup: startup, 
// 					stage: stage, 
// // 					startup_name: startup_name, 
// 					fundr: fundr, 
// 					loan: loan,
					// loan_type: loan_type,
// 					description: description, 
// 					events: events, 
// 					lfunds: lfunds, 
// 					pitchdeck: pitchdeck,
// 					sector: sector,
          source:source,
					referral_code:referral_code,
// 					recaptcha: grecaptcha.getResponse(recaptcha1),
					
				},
				success: function (data) {
            swal('','sucess in submition ead form','success')
          document.getElementById('eadForm').reset();
          
				},
				cache: false,
				error: function () {
        swal('','failed to submit ead from',"error")

				}
			});
			// $('.lsmsubmit').prop('disabled', false);
		
}
                
  );




$('#lsmForm').submit((e)=>{
  e.preventDefault();
  console.log("lsmform");
 			var name = $('#name').val();
			var email = $('#email').val();
			var mobile = $('#mobile').val();
			var city = $('#city').val();
			var startup = $('#startup').val();
			var stage = $('#stage').val();
			var startup_name = $('#startup_name').val();
			var fundr = $('#fundr').val();
// 			var loan = $('#loan').val();
// 			var loan_type = $('#loantype').val();
			var description = $('#description').val();
			var referral_code=$('#referralcode').val();
			// var events = $('.events').val();
			 var events ="";
            $.each($("input[name='events']:checked"), function(){            
                events+=($(this).val());
            });
			var lfunds = $('#lfunds').val();
// 			var pitchdeck = $('#pitchdeck').val();
			var sector = $('#sector').val();
      	$.ajax({
				url: 'https://api.ecell-iitkgp.org/forms/lsmform/',
				method: 'POST',
				data: {
					name: name,
					email: email,
					mobile: mobile, 
					city: city, 
					startup: startup, 
					stage: stage, 
					startup_name: startup_name, 
					fundr: fundr, 
// 					loan: loan,
// 					loan_type: loan_type,
					description: description, 
					events: events, 
					lfunds: lfunds, 
// 					pitchdeck: pitchdeck,
					sector: sector,
					referral_code:referral_code,
					
				},
				success: function (data) {
       swal('','sucess in submition lsm form','success');
          document.getElementById('lsmForm').reset();
				},
				cache: false,
				error: function () {
            swal('','failed to submit lsm from',"error")
				

				}
			});
})


// Query form
$('#contactForm').submit((e)=>{
	e.preventDefault();
	console.log("contactform");
			   var name = $('#name_c').val();
			  var email = $('#email_c').val();
			  var subject = $('#subject_c').val();
			  var message = $('#message_c').val();
			//   var startup = $('#startup').val();
			//   var stage = $('#stage').val();
			//   var startup_name = $('#startup_name').val();
			//   var fundr = $('#fundr').val();
  // 			var loan = $('#loan').val();
  // 			var loan_type = $('#loantype').val();
			//   var description = $('#description').val();
			//   var referral_code=$('#referralcode').val();
			  // var events = $('.events').val();
// 			   var events ="";
// 			  $.each($("input[name='events']:checked"), function(){            
// 				  events+=($(this).val());
// 			  });
// 			  var lfunds = $('#lfunds').val();
//   // 			var pitchdeck = $('#pitchdeck').val();
// 			  var sector = $('#sector').val();
			$.ajax({
				  url: 'https://api.ecell-iitkgp.org/forms/contactead/',
				  method: 'POST',
				  data: {
					  name: name,
					  email: email,
					  subject: subject, 
					  message: message, 
					//   startup: startup, 
					//   stage: stage, 
					//   startup_name: startup_name, 
					//   fundr: fundr, 
  // 					loan: loan,
  // 					loan_type: loan_type,
					//   description: description, 
					//   events: events, 
					//   lfunds: lfunds, 
  // 					pitchdeck: pitchdeck,
					//   sector: sector,
					//   referral_code:referral_code,
					  
				  },
				  success: function (data) {
		 swal('','sucess in submition contact form','success');
			document.getElementById('contactForm').reset();
				  },
				  cache: false,
				  error: function () {
			  swal('','failed to submit contact from',"error")
				  
  
				  }
			  });
  })