<ul class="b-cart nav nav-inventory pull-left">
    <li id="js-cart-shortcut" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="0">
        <span class="fa fa-shopping-cart"></span>
        <span class="js-cart-placeholder-total">{$commerce.cart.total|currency_format}</span>
        <span class="badge js-cart-placeholder-count" title="{lang key='products_count' count=$commerce.cart.count}">{$commerce.cart.count}</span>
        <span class="caret"></span>
    </li>
    <div id="js-cart-contents" class="dropdown-menu">
        {include 'extra:commerce/widget.cart'}
    </div>
</ul>