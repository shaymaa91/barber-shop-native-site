function owlPrev(id) {
    var owlVal= document.getElementById(id);
    if (owlVal=='fashiontop') {
        // change the paragraph
        document.getElementById(id).innerHTML = "Formas humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima et quinta decima.";
        // change the caption div 1
        document.getElementById(id).innerHTML = "John Smith";
        // change the caption div 2
        document.getElementById(id).innerHTML = "Microsoft";
    }
    if (owlVal == 'Britney Doe') {
        // change the paragraph
        document.getElementById(id).innerHTML = "Formas humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima et quinta decima.";
        // change the caption div 1
        document.getElementById(id).innerHTML = "John Smith";
        // change the caption div 2
        document.getElementById(id).innerHTML = "Microsoft";
    }
    
    else {
        owlVal='fashiontop'
      // change the paragraph
      document.getElementById(id).innerHTML = "Formas humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima et quinta decima.";
      // change the caption div 1
      document.getElementById(id).innerHTML = "John Smith";
      // change the caption div 2
      document.getElementById(id).innerHTML = "Microsoft";
    }
    
  }

  