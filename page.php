<?php
get_header();
get_template_part('templates/template', 'page-header');
?>
<div class="prova-page">
    <div class="columns plain">
        <div class="content">
            <h1 class="section-title"><?php the_title();?></h1>
            <?php the_content();?>
        </div>
    </div>
</div>
<?php get_footer();
