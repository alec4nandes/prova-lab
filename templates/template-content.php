<div class="content">
    <?php if ($args['title']): ?>
        <h1 class="section-title"><?php echo $args['title']; ?></h1>
    <?php endif;
    echo apply_filters('the_content', $args['content_sections']['main']);
    get_template_part('templates/template', 'read-more-link', $args);?>
</div>