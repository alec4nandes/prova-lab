<?php
get_header();
get_template_part('templates/template', 'page-header'); ?>
<div class="feature-image-side">
    <?php
        if (!is_front_page()): ?>
            <div class="content-wrapper <?php echo $args['side']; ?>-side">
                <div class="content">
                    <img class="featured-image float-<?php echo $args['side']; ?>"
                        src="<?php echo get_the_post_thumbnail_url(); ?>"
                        alt="FILL!" />
                    <h1 class="section-title page-title"><?php the_title(); ?></h1>
                    <?php the_content(); ?>
                    <div class="events-spacer"></div>
                    <?php
                    $id = get_the_ID();
                    if ($id === 160 || $id === 147): ?>
                        <div id="<?php echo $id === 160 ? 'events' : 'bootcamps'; ?>">
                            <h2 id="loading-events" class="section-title">LOADING EVENTS...</h2>
                        </div>
                    <?php endif;?>
                </div>
            </div>
        <?php endif;?>
    </div>
<?php get_footer();?>
