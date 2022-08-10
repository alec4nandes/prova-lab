<?php
require get_template_directory() . "/php/events.php";

get_header();

$events = get_specific_events($args['event_type']);

function sort_by_date($event1, $event2)
{
    return strtotime($event2['start']['utc']) - strtotime($event1['start']['utc']);
}

usort($events, "sort_by_date");

function format_date($event)
{
    $timestamp = $event['start'][array_key_exists('local', $event['start']) ? 'local' : 'utc'];
    return date('j F Y', strtotime($timestamp));
}
?>

<div class="eventbrite-listings">
    <div class="events-status">
        <div class="events-category">
            <?php if ($args['event_type'] === 'sips'): ?>
            <h3 class="category-name">SIP Events (<?php echo count($events); ?>)</h3>
            <p>
                Originally devised as an online series of informal happy hours
                during COVID-19’s shelter-in-place, SIPs are signature Prova Lab events
                designed to raise awareness and connect on issues in our community.
                SIP remains a safe and meaningful space to learn, inspire and support each other.
            </p>
            <?php elseif ($args['event_type'] === "bootcamps"): ?>
                <h3 class="category-name">Bootcamps (<?php echo count($events); ?>)</h3>
            <?php endif;?>
            <div class="arrows-wrapper">
                <h1 class="arrow section-title" style="padding-right: 10px;" onclick="scrollEvents(event, false)">&#x25C0;&#xFE0E;</h1>
                <div class="events-wrapper">
                    <?php foreach ($events as $event): ?>
                    <div class="event-info">
                        <?php if ($event['status'] !== "completed"): ?>
                            <p class="upcoming-header">UPCOMING</p>
                        <?php endif;?>
                        <div class="event-content">
                            <?php if (array_key_exists('url', $event)): ?>
                                <a href="<?php echo $event['url']; ?>" target="_blank" rel="noreferrer">
                                    <h4 class="event-name"><?php echo $event['name']['text']; ?></h4>
                                </a>
                            <?php else: ?>
                                <h4 class="event-name"><?php echo $event['name']['text']; ?></h4>
                            <?php endif;?>
                            <p class="date">
                                <?php echo format_date($event); ?>
                            </p>
                            <p class="description"><?php echo $event['description']['text']; ?></p>
                        </div>
                    </div>
                    <?php endforeach;?>
                </div>
                <h1 class="arrow section-title" style="padding-left: 10px;" onclick="scrollEvents(event, true)">&#x25B6;&#xFE0E;</h1>
            </div>
        </div>
    </div>
</div>
