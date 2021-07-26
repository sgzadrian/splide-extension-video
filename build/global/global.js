/**
 * Set the Video extension to the global object.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import Video from '../../src/js/splide-extension-video';

let _window = window || global
_window.splide = _window.splide || {};
_window.splide.Extensions = _window.splide.Extensions || {};
_window.splide.Extensions.Video = Video;
