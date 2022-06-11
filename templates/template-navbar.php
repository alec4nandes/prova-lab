<div  id="<?php echo $args['id']; ?>" class="navbar">
<?php
wp_nav_menu('navigation-menu');
get_template_part('templates/template', 'subscribe');
if (is_front_page()): ?>
<div id="scroll-down" class="shown"><p>▼</p></div>
<?php endif;?>
</div>