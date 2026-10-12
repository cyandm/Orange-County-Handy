<?php

/**
 * Home FAQ — shared FAQ section with the home questions and a contact CTA
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

Templates::getPart('faq-section', ['faq_ids' => get_field('home_faqs') ?: [], 'faq_place' => 'home', 'cta_title' => get_field('home_faq_cta_title') ?: __('still have a question?', 'orange-county-handy'), 'cta_text' => get_field('home_faq_cta_text') ?: __('we’re here to help. reach out to us directly and we’ll get back to you as soon as possible.', 'orange-county-handy'), 'cta_url' => Templates::getPageUrl('contact-us'), 'cta_label' => __('Contact Us', 'orange-county-handy')]);
