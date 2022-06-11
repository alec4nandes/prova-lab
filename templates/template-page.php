<?php
get_header();
get_template_part('templates/template', 'page-header');
$content_sections = get_extended(get_post(get_the_ID())->post_content);?>
<div class="prova-page">
    <?php
    $id = get_the_ID();
    $other_args = [
        'id' => $id,
        'bg_url' => get_the_post_thumbnail_url($id),
        'title' => get_post_meta($id, 'landing_no_title', true) ? false : get_the_title(),
        'content_sections' => $content_sections,
        'read_more_link' => false,
    ];
    get_template_part(
        'templates/template',
        $args['template_name'],
        $other_args,
    );?>
    <div class="more-content-container">
        <?php get_template_part("templates/template", "more-content", $other_args); ?>
    </div>
</div>
<?php get_footer();?>
