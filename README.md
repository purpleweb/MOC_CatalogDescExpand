README
================

This plugin add expander to category description for Magento

Warning: it's a french version
Todo: Add translations

Usage
-----

Exemple usage for a category description

```html
<div>
<h1>My title</h1>
<div class="expandable">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae risus volutpat, hendrerit risus sit amet, faucibus velit. Sed ligula urna, maximus ut molestie eu, tempus a tellus. Duis tincidunt, erat a euismod commodo, neque est imperdiet elit, sed posuere tellus mauris ac neque. Curabitur dapibus, nisi et rhoncus condimentum, augue metus porttitor nunc, quis fermentum risus felis feugiat enim.
<span class="read-more">&hellip; <a href="#">Read more</a></span>
<span class="details"><br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae risus volutpat, hendrerit risus sit amet, faucibus velit. Sed ligula urna, maximus ut molestie eu, tempus a tellus. Duis tincidunt, erat a euismod commodo, neque est imperdiet elit, sed posuere tellus mauris ac neque. Curabitur dapibus, nisi et rhoncus condimentum, augue metus porttitor nunc, quis fermentum risus felis feugiat enim. Quisque gravida mauris augue, in placerat augue elementum vel. Aenean malesuada eleifend posuere. Vestibulum id ex felis. Vestibulum laoreet justo non elit rutrum consequat. Nullam interdum sagittis leo, ac rhoncus leo mattis non. Cras pellentesque, tellus sit amet maximus tempor, purus enim varius felis, sit amet pretium nibh turpis a tortor. Nunc a porttitor magna. Proin quis lectus sit amet est sollicitudin malesuada. Mauris egestas sit amet lacus nec elementum. Aliquam pulvinar nunc quis arcu convallis ultrices.
</span>
</div>
</div>
```

Install via Modman
----------------

You can install this module using [Colin Mollenhour's](https://github.com/colinmollenhour) [Modman tool](https://github.com/colinmollenhour/modman)

```bash
$ modman init
$ modman clone https://github.com/tonioMtl/MOC_CatalogDescExpand.git
```
You can update the module with this command

```bash
$ modman update MOC_CatalogDescExpand
```

Require
-------

jquery

Include
-------

This module use jquery-expander from kswedberg
https://github.com/kswedberg/jquery-expander
