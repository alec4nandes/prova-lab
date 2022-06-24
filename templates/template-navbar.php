<div  id="<?php echo $args['id']; ?>" class="navbar">
<?php
dynamic_sidebar("Navigation");
if (is_front_page()): ?>
<div id="scroll-down" class="shown"><p>▼</p></div>
<?php endif;?>
</div>