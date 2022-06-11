<a href="<?php echo get_home_url(); ?>">
    <div id="page-heading" style="background-color: <?php echo get_theme_mod('landing_bg_color'); ?>;">
        <img src="<?php echo get_theme_mod('landing_logo'); ?>" />
    </div>
</a>
<?php get_template_part('templates/template', 'navbar', ['id' => 'sticky']);?>