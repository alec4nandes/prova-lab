<div class="rotating-right columns">
    <?php get_template_part('templates/template', 'content', $args);?>
    <div class="rotating">
        <img src="<?php echo $args['bg_url']; ?>" />
    </div>
</div>
<?php get_template_part('templates/template', 'more-content', $args);?>