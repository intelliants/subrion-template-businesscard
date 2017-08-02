<div class="newsletters">
	<div class="container">
    <div class="alert alert-warning" id="newsletters-msg" style="display:none">
        <button type="button" class="close">×</button>
        <span class="msg"></span>
    </div>
    <div class="row">
        <div class="col-md-6">
            <h4 id="caption_newsletters_subscription" class="box__caption">{lang key='newsletters_caption'}</h4>
            <p>{lang key='newsletters_content'}</p>
        </div>
        <div class="col-md-6">
            <div class="row newsletters__form">
                {$column = 8}
                {if $core.config.newsletters_block_fullname}
                    {$column = 4}
                    <div class="col-md-{$column}">
                        <input type="text" id="newsletters-name" placeholder="{lang key='name'}" class="form-control">
                    </div>
                {/if}
                <div class="col-md-{$column}">
                    <input type="text" id="newsletters-email" placeholder="{if $core.config.newsletters_block_fullname}{lang key='email'}{else}{lang key='enter_email'}{/if}" class="form-control">
                </div>
                <div class="col-md-4">
	                <div class="b-call__action">
	                    <button type="button" id="newsletters-subscribe">{lang key="subscribe"}</button>
	                </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>


{ia_print_css files='_IA_URL_modules/newsletters/templates/front/css/style'}
{ia_add_js}
$(function()
{
	$('#newsletters-subscribe').click(function(){
		var fullname_input = $('#newsletters-name');
		var email_input = $('#newsletters-email');

		if (email_input.val() == '')
		{
			$('#newsletters-msg')
				.toggleClass('alert-error')
				.slideDown(100);

			$('#newsletters-msg .msg').html(_t('empty_email_input'));
		}
		else
		{
			$.ajax({
				url: intelli.config.ia_url + 'newsletters/read.json',
				data: { subscriber_email: email_input.val(), subscriber_fullname: fullname_input.val()},
				dataType: 'json',
				async: false,
				success: function (response) {
					$('#newsletters-msg')
						.toggleClass('alert-error', response.error)
						.toggleClass('alert-success', !response.error)
						.slideDown(100);

					$('#newsletters-msg .msg').html(response.message);
				}
			});
		}
	});

	$('#newsletters-msg .close').click(function(){
		$('#newsletters-msg').slideUp(100);
	});
});

{/ia_add_js}