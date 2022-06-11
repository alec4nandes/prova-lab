<?php
/*
 * Template Name: Landing Page 1
 * Template Post Type: page
 */
get_header();
get_template_part('templates/template', 'page-header');
?>
<main>
    <div id="landing-1">
        <?php the_content();?>
    </div>
</main>
<?php get_footer();?>