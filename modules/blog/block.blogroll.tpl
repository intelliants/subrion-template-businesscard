{if isset($block_blog_entries) && $block_blog_entries}
<div class="blogroll">
	<div class="container">
		<div class="row">
			{foreach $block_blog_entries as $one_blog_entry}
				<div class="col-md-3">
					<div class="b-card">
						<a class="b-card__image" href="{$smarty.const.IA_URL}blog/{$one_blog_entry.id}-{$one_blog_entry.alias}">
							{if $one_blog_entry.image}
								{ia_image file=$one_blog_entry.image title=$one_blog_entry.title}
							{else}
								<img src="{$img}no-blog-image.png" alt="">
							{/if}
							<p class="b-card__summary">{$one_blog_entry.body|strip_tags|truncate:$core.config.blog_max_block:'...'}</p>
						</a>
						<h4 class="b-card__title"><a href="{$smarty.const.IA_URL}blog/{$one_blog_entry.id}-{$one_blog_entry.alias}">{$one_blog_entry.title|escape: html}</a></h4>
						<p class="b-card__date">{$one_blog_entry.date_added|date_format:$core.config.date_format}</p>
					</div>
				</div>

				{if $one_blog_entry@iteration % 4 == 0 && !$one_blog_entry@last}
					</div>
					<div class="row">
				{/if}
			{/foreach}
		</div>
	</div>
	<p class="m-t text-center"><a href="{$smarty.const.IA_URL}blog/" class="btn btn-warning">{lang key='view_all_blog_entries'}</a></p>
</div>
{else}
	<div class="blogroll">
		<div class="alert alert-info">{lang key='no_blog_entries'}</div>
	</div>
{/if}