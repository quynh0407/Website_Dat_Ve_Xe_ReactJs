import $ from 'jquery';

declare global {
    interface Window {
        jQuery: any;
        $: any;
    }
}

if (typeof window !== 'undefined') {
  window.jQuery = window.$ = $;
}

$(document).ready(function () {
    "use strict";

    // Chỉ chạy code nếu tồn tại #main-wrapper
    if ($("#main-wrapper").length === 0) return;

    var url = window.location.href;
    var path = url.replace(
        window.location.protocol + "//" + window.location.host + "/",
        ""
    );

    // Kiểm tra xem có phần tử #sidebarnav không
    if ($("#sidebarnav").length > 0) {
        var element = $("#sidebarnav a").filter(function () {
            return (this as HTMLAnchorElement).href === url || (this as HTMLAnchorElement).href === path;
        });

        element.parentsUntil(".sidebar-nav").each(function () {
            if ($(this).is("li") && $(this).children("a").length !== 0) {
                $(this).children("a").addClass("active");
                if ($(this).parent("#sidebarnav").length === 0) {
                    $(this).addClass("active");
                } else {
                    $(this).addClass("selected");
                }
            } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
                $(this).addClass("selected");
            } else if ($(this).is("ul")) {
                $(this).addClass("in");
            }
        });

        element.addClass("active");

        $("#sidebarnav a").on("click", function (e) {
            if (!$(this).hasClass("active")) {
                $("ul", $(this).parents("ul:first")).removeClass("in");
                $("a", $(this).parents("ul:first")).removeClass("active");

                $(this).next("ul").addClass("in");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
                $(this).parents("ul:first").removeClass("active");
                $(this).next("ul").removeClass("in");
            }
        });

        $("#sidebarnav > li > a.has-arrow").on("click", function (e) {
            e.preventDefault();
        });
    }
});