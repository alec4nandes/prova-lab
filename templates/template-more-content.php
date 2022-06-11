<?php
$extended = $args['content_sections']['extended'];
if (!is_front_page()): ?>
    <div class="read-more-content">
        <div class="read-more-content-wrapper">
            <?php
echo apply_filters('the_content', $extended); ?>
            <div class="events-spacer"></div>
            <?php if ($args['id'] === 160 || $args['id'] === 147): ?>
                <div id="<?php echo $id === 160 ? 'events' : 'bootcamps'; ?>">
                    <h2 id="loading-events" class="section-title">LOADING EVENTS...</h2>
                </div>
            <?php endif;?>
        </div>
    </div>
<?php endif;?>
