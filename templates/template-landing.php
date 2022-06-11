<?php
get_template_part('templates/template', 'top');
get_template_part('templates/template', 'navbar', ['id' => 'sticky']);?>
<main id="landing">
<?php
for ($i = 1; $i <= count(get_pages()); $i++) {
    $page_id = get_theme_mod('landing_sections_' . $i);
    if (!empty($page_id)) {
        $page = get_post($page_id);
        $bg_url = $featured_image_url = wp_get_attachment_image_url(get_post_thumbnail_id($page_id), 100);
        $no_title = get_post_meta($page_id, 'landing_no_title', true/* single */);
        $title = $no_title ? null : $page->post_title;
        $content_sections = get_extended($page->post_content);
        $read_more_link = $content_sections['extended'] ? get_permalink($page_id) : null;
        $template = get_post_meta($page_id, 'landing_template', true/* single */);
        $args = [
            'id' => $page_id,
            'bg_url' => $bg_url,
            'title' => $title,
            'content_sections' => $content_sections,
            'read_more_link' => $read_more_link,
        ];
        $template_exists = locate_template('templates/template-' . $template . '.php');
        get_template_part("templates/template", ($template_exists ? $template : 'parallax-left'), $args);
    }
}
?>
</main>
