$(function() {
  $('[accesskey]').each(function() {
    var $this = $(this), accesskey = $this.attr('accesskey');
    $this.html($this.text().replace(accesskey, '<span>' + accesskey + '</span>'));
  });
});
