function AwesomeSheet(options){
  this.el = document.getElementById('awesome-sheet');

  // default options
  var defaultOptions = {
    touchDismiss: true
  }

  this.options = options || defaultOptions;
  this.el.children[0].style.bottom = - this.el.children[0].offsetHeight + 'px';
  this.el.remove();

  this.el.addEventListener('click', function(e){
    if(e.target.className !== 'item'){
      if (this.options.touchDismiss === true) {
        this.hide();
      };
    }
  }.bind(this))
}

AwesomeSheet.prototype.show = function(){
  console.log(this.el);
  document.body.appendChild(this.el);
  setTimeout(function(){
    this.el.children[0].style.bottom = 0;
    this.el.style.backgroundColor = 'rgba(0, 0, 0, 0.498039)';
  }.bind(this),1)
}

AwesomeSheet.prototype.hide = function(){
  this.el.children[0].style.bottom = - this.el.children[0].offsetHeight + 'px';
  this.el.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  setTimeout(function(){
    this.el.remove();
  }.bind(this),200)
}

module.exports = AwesomeSheet;