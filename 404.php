<?php
get_header();
get_template_part('templates/template', 'page-header');
?>
<div class="prova-page">
    <div class="columns plain">
        <div class="content error-404">
            <span>
                O<img src="<?php echo get_stylesheet_directory_uri() . '/images/prova-lab-splash.png'; ?>" alt="O in Prova Lab logo"/>ps!
            </span>
            <p>
                This page doesn't exist!
                <a href="<?php echo get_home_url(); ?>">Return home.</a>
            </p>
        </div>
    </div>
</div>
<?php get_footer();
