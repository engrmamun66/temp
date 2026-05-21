<?php

return [
    "rentmy_themes" => [
        [
            "name"    => "Default",
            "slug"    => "default",
            "status"  => 1,
            "details" => null,
            "pages"   => [
            ["slug" => "products-list", "name" => "Products List", "contents" => '<div class="RentMyWrapperProductList RentMyWrapper container mx-auto px-4 py-6 max-w-screen-xl"
     data-RentMyData="limit=21">

    <div class="RentMyProductRow RentMyProductListRow flex flex-col md:flex-row gap-6 items-start">

        <!-- ══════════════════════════════
             SIDEBAR
        ══════════════════════════════ -->
        <div class="RentMyFilterArea w-full md:flex-shrink-0 md:w-52 lg:w-64 2xl:w-70"
             data-rentmyattr="RentMyFilterArea">

            <div class="RentMyFilterAreaInner md:sticky md:top-4 rounded-lg overflow-hidden
                        bg-white shadow-sm border border-gray-200">

                <!-- ── CATEGORY ── -->
                <div class="RentMyCategory px-5 pt-5 pb-4 border-b border-gray-100">

                    <div class="flex items-center justify-between">
                        <h3 class="RentMyFilterTitle text-sm font-bold uppercase tracking-widest text-gray-800
                                   after:content-[\'\'] after:block after:w-10 after:h-0.5
                                   after:bg-[var(--brand-primary)] after:mt-1.5 after:rounded-full">
                            Category
                        </h3>
                        <span class="text-gray-400 text-lg leading-none select-none">−</span>
                    </div>

                    <div class="CategoryMenuList overflow-y-auto max-h-56 mt-3">
                        <ul class="CategoryMenu space-y-0.5" data-rentmyattr="RentMyFilterByCategory">
                            <li>
                                <a href="#" class="flex items-center justify-between py-1.5 text-sm
                                                   text-gray-600 hover:text-[var(--brand-primary)] transition-colors group">
                                    <span>Category A</span>
                                    <i class="rm rm-chevron-right text-xs text-gray-300 group-hover:text-[var(--brand-primary)] transition-colors"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-between py-1.5 text-sm
                                                   text-gray-600 hover:text-[var(--brand-primary)] transition-colors group">
                                    <span>Category B</span>
                                    <i class="rm rm-chevron-right text-xs text-gray-300 group-hover:text-[var(--brand-primary)] transition-colors"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-between py-1.5 text-sm
                                                   text-gray-600 hover:text-[var(--brand-primary)] transition-colors group">
                                    <span>Category C</span>
                                    <i class="rm rm-chevron-right text-xs text-gray-300 group-hover:text-[var(--brand-primary)] transition-colors"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-between py-1.5 text-sm
                                                   text-gray-600 hover:text-[var(--brand-primary)] transition-colors group">
                                    <span>Category D</span>
                                    <i class="rm rm-chevron-right text-xs text-gray-300 group-hover:text-[var(--brand-primary)] transition-colors"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-between py-1.5 text-sm
                                                   text-gray-600 hover:text-[var(--brand-primary)] transition-colors group">
                                    <span>Category E</span>
                                    <i class="rm rm-chevron-right text-xs text-gray-300 group-hover:text-[var(--brand-primary)] transition-colors"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-between py-1.5 text-sm
                                                   text-gray-600 hover:text-[var(--brand-primary)] transition-colors group">
                                    <span>Category F</span>
                                    <i class="rm rm-chevron-right text-xs text-gray-300 group-hover:text-[var(--brand-primary)] transition-colors"></i>
                                </a>
                            </li>
                        </ul>
                        <a href="#" RentMyPageLink="products_list"
                           class="citystash-btn category-reset mt-3 inline-flex items-center gap-1.5
                                  text-xs text-[var(--brand-primary)] hover:text-[var(--brand-primary-dark)] font-semibold transition-colors">
                            <i class="rm rm-arrow-left text-xs"></i> Reset
                        </a>
                    </div>
                </div>

                <!-- ── FILTER ── -->
                <div class="RentMyFilter px-5 pt-5 pb-4 border-b border-gray-100">
                    <div class="RentMyFilterList">

                        <div class="flex items-center justify-between">
                            <h3 class="RentMyFilterTitle text-sm font-bold uppercase tracking-widest text-gray-800
                                       after:content-[\'\'] after:block after:w-10 after:h-0.5
                                       after:bg-[var(--brand-primary)] after:mt-1.5 after:rounded-full">
                                Filter
                            </h3>
                            <span class="text-gray-400 text-lg leading-none select-none">−</span>
                        </div>

                        <div class="FilterCheckbox overflow-y-auto max-h-56 mt-3 space-y-2"
                             data-rentmyattr="RentMyFilterByTag">
                            <label class="RentMyCheckbox flex items-center gap-2.5 cursor-pointer group">
                                <input type="checkbox"
                                       class="w-4 h-4 rounded-sm border-gray-300 accent-[var(--brand-primary)] cursor-pointer" />
                                <a href="#" class="text-sm text-gray-600 group-hover:text-[var(--brand-primary)] transition-colors">
                                    give donate
                                </a>
                            </label>
                            <label class="RentMyCheckbox flex items-center gap-2.5 cursor-pointer group">
                                <input type="checkbox"
                                       class="w-4 h-4 rounded-sm border-gray-300 accent-[var(--brand-primary)] cursor-pointer" />
                                <a href="#" class="text-sm text-gray-600 group-hover:text-[var(--brand-primary)] transition-colors">
                                    give donate
                                </a>
                            </label>
                            <label class="RentMyCheckbox flex items-center gap-2.5 cursor-pointer group">
                                <input type="checkbox"
                                       class="w-4 h-4 rounded-sm border-gray-300 accent-[var(--brand-primary)] cursor-pointer" />
                                <a href="#" class="text-sm text-gray-600 group-hover:text-[var(--brand-primary)] transition-colors">
                                    give donate
                                </a>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- ── PRICE ── -->
                <div class="RentMyPriceArea px-5 pt-5 pb-4 border-b border-gray-100">

                    <div class="flex items-center justify-between">
                        <h3 class="RentMyFilterSubTitle text-sm font-bold uppercase tracking-widest text-gray-800
                                   after:content-[\'\'] after:block after:w-10 after:h-0.5
                                   after:bg-[var(--brand-primary)] after:mt-1.5 after:rounded-full">
                            Price
                        </h3>
                        <span class="text-gray-400 text-lg leading-none select-none">−</span>
                    </div>

                    <div class="RentMyPrice mt-4">
                        <div class="RentMyRow flex gap-3" data-rentmyattr="RentMyFilterByPrice">
                            <div class="RentMyInputGroup RentMyHalfwidth flex-1 flex flex-col gap-1">
                                <label class="text-xs text-gray-400 font-medium"
                                       data-rentmyattr="RentMyFilterByPriceMinLabel">Min</label>
                                <input type="text" class="RentMyInputField w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" data-rentmyattr="RentMyMinPrice" />
                            </div>
                            <div class="RentMyInputGroup RentMyHalfwidth flex-1 flex flex-col gap-1">
                                <label class="text-xs text-gray-400 font-medium"
                                       data-rentmyattr="RentMyFilterByPriceMaxLabel">Max</label>
                                <input type="text" class="RentMyInputField w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" data-rentmyattr="RentMyMaxPrice" />
                            </div>
                            <!-- <div class="RentMyButtonGroup RentMyNotBetween">
                                <button class="RentMyBtn RentMyBtnBlack"
                                    data-rentmyattr="RentMyMinMaxSubmitBtn">Submit</button>
                                <button class="RentMyBtn RentMyBtnRed"
                                    data-rentmyattr="RentMyMinMaxClearBtn">Clear</button>
                            </div> -->
                        </div>
                    </div>
                </div>

                <!-- ── TYPE ── -->
                <div class="RentMyTypeArea px-5 pt-5 pb-5">

                    <div class="flex items-center justify-between">
                        <h3 class="RentMyFilterSubTitle text-sm font-bold uppercase tracking-widest text-gray-800
                                   after:content-[\'\'] after:block after:w-10 after:h-0.5
                                   after:bg-[var(--brand-primary)] after:mt-1.5 after:rounded-full">
                            Type
                        </h3>
                        <span class="text-gray-400 text-lg leading-none select-none">−</span>
                    </div>

                    <div class="RentMyType mt-4 space-y-2" data-rentmyattr="RentMyFilterByRentalType">
                        <label class="RentMyRadio flex items-center gap-2.5 cursor-pointer group"
                               data-rentmyattr="RentMyFilterByLabelRent">
                            <input type="radio" name="RentalType" value="rent"
                                   class="w-4 h-4 border-gray-300 accent-[var(--brand-primary)] cursor-pointer" />
                            <span class="text-sm text-gray-600 group-hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="DynamicLabel">Rent</span>
                        </label>
                        <label class="RentMyRadio flex items-center gap-2.5 cursor-pointer group"
                               data-rentmyattr="RentMyFilterByLabelBuy">
                            <input type="radio" name="RentalType" value="buy"
                                   class="w-4 h-4 border-gray-300 accent-[var(--brand-primary)] cursor-pointer" />
                            <span class="text-sm text-gray-600 group-hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="DynamicLabel">Buy</span>
                        </label>
                        <label class="RentMyRadio flex items-center gap-2.5 cursor-pointer group"
                               data-rentmyattr="RentMyFilterByLabelAll">
                            <input type="radio" name="RentalType" value="all"
                                   class="w-4 h-4 border-gray-300 accent-[var(--brand-primary)] cursor-pointer" />
                            <span class="text-sm text-gray-600 group-hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="DynamicLabel">All</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
        <!-- End Sidebar -->

        <!-- ══════════════════════════════
             PRODUCT AREA
        ══════════════════════════════ -->
        <div class="RentMyProductArea flex-1 min-w-0">

            <!-- Sort bar -->
            <div class="RentMyRow SortProductRow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div class="col-lg-5 flex-1 sm:max-w-xs">
                    <div class="RentMyProductSearchWidget">
                        <input data-rentmyattr="SearchInput" type="text" placeholder="Search by product name..." class="RentMyInputField w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" />
                    </div>
                </div>
                <div class="col-lg-5 text-end flex-shrink-0">
                    <div class="SortProduct flex items-center gap-2">
                        <label class="text-sm font-semibold text-gray-600 whitespace-nowrap">Sort By :</label>
                        <select class="RentMyInputField border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition"
                                data-rentmyattr="RentMyShortByDropdown">
                            <option value="sort_by=product_name&sort_dir=ASC">Product name A-Z</option>
                            <option value="sort_by=product_name&sort_dir=DSC">Product name Z-A</option>
                            <option value="sort_by=rent_price&sort_dir=ASC">Rental price low to high</option>
                            <option value="sort_by=rent_price&sort_dir=DSC">Rental price high to low</option>
                            <option value="sort_by=buy_price&sort_dir=ASC">Sale price low to high</option>
                            <option value="sort_by=buy_price&sort_dir=DSC">Sale price high to low</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Category short description -->
            <div class="RentMyRow CategoryShortDescription mb-4 text-sm text-gray-500 leading-relaxed"
                 data-rentmyattr="CategoryShortDescription"></div>

            <!-- ── Product Grid ── -->
            <div class="RentMyRow grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

                <div class="RentMyProductItem" data-rentmyattr="RentMyProductItemSample">
                    <div class="RentMyProductItemInner bg-white border border-gray-200 rounded-md
                                overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200
                                group flex flex-col">

                        <!-- Image -->
                        <div class="RentMyProductImg relative bg-white px-4 pt-5 pb-3
                                    flex items-center justify-center min-h-[170px]">
                            <a href="#" data-rentmyattr="RentMyProductImageUrl" class="block w-full">
                                <img data-rentmyattr="RentMyProductImage"
                                     src="https://s3.us-east-2.amazonaws.com/images.rentmy.co/products/982/193260/hrfnd9e_1669558177_2qqwq6o.jpg"
                                     class="ProductImg w-full h-44 object-contain bg-white mx-auto"
                                     alt="product img" />
                            </a>

                            <!-- Wishlist -->
                            <div class="RentMyProductOverlay absolute top-2.5 right-2.5">
                                <!-- <a class="ProductCartIcon" href="#" data-rentmyattr="DetailsPageUrl">
                                    <i class="rm rm-bag"></i>
                                </a> -->
                                <div class="WishlistSingleItemOption" data-rentmyattr="WishListBtnArea">
                                    <button class="WishlistAddButton w-8 h-8 bg-white border border-gray-200
                                                   rounded-full flex items-center justify-center shadow-sm
                                                   hover:border-red-300 hover:text-red-500 text-gray-400
                                                   transition-colors"
                                            data-rentmyattr="RentMyAddToWishListBtn">
                                        <i class="rm rm-heart-outline"></i> 
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Card body -->
                        <div class="RentMyProductBody px-4 pb-4 pt-2 flex flex-col gap-1.5 flex-1 border-t border-gray-100">
                            <h4 class="ProductName text-sm font-semibold text-gray-800 leading-snug line-clamp-2 mt-1"
                                data-rentmyattr="RentMyProductName">
                                <a href="#" data-rentmyattr="product_name"
                                   class="hover:text-[var(--brand-primary)] transition-colors">
                                    {{ product_name }}
                                </a>
                            </h4>
                            <h5 class="ProductPrice text-sm font-bold text-[var(--brand-primary)]"
                                data-rentmyattr="RentMyProductPrice">
                                {{ product_price }}
                            </h5>
                            <!-- <div class="ProductButton" data-rentmyattr="ProductButtons">
                                <a class="ProductDetailsBtn mt-2 flex items-center justify-center gap-2
                                          border border-[var(--brand-primary)] text-[var(--brand-primary)] text-sm font-semibold
                                          rounded-lg py-2.5 px-3 hover:bg-[var(--brand-primary)] hover:text-white
                                          transition-colors duration-150"
                                   href="#" data-rentmyattr="RentMyViewDetailsBtn">
                                    <i class="rm rm-cart text-sm"></i> Add To Cart
                                </a>
                                <button class="ProductCartBtn" href="#" data-rentmyattr="RentMyAddToCartBtn">Add to Cart</button>
                            </div> -->
                        </div>
                    </div>
                </div>

            </div>
            <!-- End Product Grid -->

            <!-- Category description -->
            <div class="RentMyRow CategoryDescription mt-6 text-sm text-gray-500 leading-relaxed"
                 data-rentmyattr="CategoryDescription"></div>

        </div>
        <!-- End Product Area -->

    </div>
</div>
', "status" => 1],
            ["slug" => "product-details", "name" => "Product Details", "contents" => '<div class="RentMyWrapperProductDetails RentMyWrapper bg-[var(--brand-surface)] min-h-screen" data-rentmy="">

  <div class="RentMyProductDetailsRow max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

    <!-- Image gallery -->
    <div class="RentMyProductDetilsImg flex flex-col gap-3 lg:w-[440px] flex-shrink-0">

      <div class="RentMyProductDetailsImgShow rounded-2xl overflow-hidden border border-[var(--brand-border)] bg-white aspect-square">
        <img data-rentmyattr="RentMyProductImage" src="" alt="product show img" class="w-full h-full object-cover">
      </div>
      <div class="RentMyProductDetailsImgList">
        <ul class="flex flex-row lg:flex-col gap-2" data-rentmyattr="RentMyProductImages">
          <li class="ActiveImg w-16 h-16 rounded-xl overflow-hidden border-2 border-[var(--brand-primary)] cursor-pointer flex-shrink-0">
            <img src="" alt="product img" class="w-full h-full object-cover">
          </li>
          <li class="w-16 h-16 rounded-xl overflow-hidden border border-[var(--brand-border)] cursor-pointer hover:border-[var(--brand-primary)] transition-colors flex-shrink-0">
            <img src="" alt="product img" class="w-full h-full object-cover">
          </li>
          <li class="w-16 h-16 rounded-xl overflow-hidden border border-[var(--brand-border)] cursor-pointer hover:border-[var(--brand-primary)] transition-colors flex-shrink-0">
            <img src="" alt="product img" class="w-full h-full object-cover">
          </li>
          <li class="w-16 h-16 rounded-xl overflow-hidden border border-[var(--brand-border)] cursor-pointer hover:border-[var(--brand-primary)] transition-colors flex-shrink-0">
            <img src="" alt="product img" class="w-full h-full object-cover">
          </li>
        </ul>
      </div>
    </div>

    <!-- Product info -->
    <div class="RentMyProductDetilsInfo flex-1 min-w-0" data-rentmyattr="RentMyProductDetilsInfo">
      <div class="product-payment-details bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-6 flex flex-col gap-3">

        <h2 class="RentMyProductName text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="RentMyProductName" data-rentmyattr2="product_name">Product Name</h2>

        <!-- Buy/Rent toggle -->
        <div class="RentMyBuyRentToggle" data-rentmyattr="RentMyBuyRentToggle">
          <label for="BuyRentToggleSwitch" class="BuyRentToggleSwitch inline-flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" id="BuyRentToggleSwitch" data-rentmyattr="BuyRentToggleSwitch" class="sr-only peer">
            <div class="ToggleSwitchRound relative w-11 h-6 bg-[var(--brand-border)] peer-checked:bg-[var(--brand-primary)] rounded-full transition-colors duration-200">
              <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 group-has-[input:checked]:translate-x-5"></span>
            </div>
          </label>
        </div>

        <div class="ShortDescription text-sm text-[var(--brand-text-muted)] leading-relaxed" data-rentmyattr="CustomFieldShortDesc">
          <p>Default Description</p>
        </div>

        <!-- Price -->
        <div class="flex flex-col gap-1">
          <h2 class="RentMyProductPrice text-xl font-bold text-[var(--brand-primary)]" data-rentmyattr="RentMyProductPrice" data-rentmyattr2="product_price_text">$0.00</h2>
          <h5 class="ProductPrice ProductPriceAsLowPerDay text-xs text-[var(--brand-text-muted)]" data-rentmyattr="RentMyProductPriceAsLowPerDay">As low as $55.00 per day</h5>
        </div>

        <!-- Recurring -->
        <div class="RentMyRecurring" data-rentmyattr="RentMyRecurring">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RecurringTitle">Recurring Pricing</h6>
          <ul class="flex flex-wrap gap-2" data-rentmyattr="RecurringList">
            <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="RecurringItem">Recurring</li>
          </ul>
        </div>

        <!-- Variants -->
        <div class="RentMyVariant" data-rentmyattr="RentMyVariant">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="VariantTitle">Rent My Variant Sizes</h6>
          <ul class="flex flex-wrap gap-2" data-rentmyattr="VariantList">
            <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="VariantItem">Small</li>
          </ul>
        </div>

        <!-- Product options -->
        <div class="RentMyProductOptions" data-rentmyattr="RentMyProductOptions">
          <div class="CustomFieldInner">
            <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="ProductOptionsTitle">Product Options</h6>
            <ul class="flex flex-col gap-3" data-rentmyattr="ProductOptionsItem">
              <div data-rentmyattr="type-select">
                <p class="text-xs font-medium text-[var(--brand-text-muted)] mb-1" data-rentmyattr="fieldLabel"></p>
                <select class="w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition"></select>
              </div>
              <div data-rentmyattr="type-button">
                <p class="text-xs font-medium text-[var(--brand-text-muted)] mb-1" data-rentmyattr="fieldLabel"></p>
                <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors inline-flex" data-rentmyattr="fieldValue"></li>
              </div>
              <div data-rentmyattr="type-radio"></div>
              <div data-rentmyattr="type-richtext">
                <p class="text-xs font-medium text-[var(--brand-text-muted)] mb-1" data-rentmyattr="fieldLabel"></p>
                <li class="text-sm text-[var(--brand-text-muted)]" data-rentmyattr="fieldValue"></li>
              </div>
            </ul>
          </div>
        </div>

        <!-- Ticket booking options -->
        <div class="RentmyTicketArea" data-rentmyattr="RentmyTicketBookingProductOptionsArea">
          <div class="RentmyTicketAreaInner" data-rentmyattr="CustomFieldInner">
            <h6 class="RentmyTicketLabel text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-3" data-rentmyattr="ProductOptionsTitle">Tickets</h6>
            <div class="RentmyTicketBox flex items-center gap-4 bg-[var(--brand-surface)] rounded-xl border border-[var(--brand-border)] px-4 py-3" data-rentmyattr="ProductOptionsItem">
              <div class="RentmyTicketSelect flex flex-col items-center gap-1">
                <button class="RentmyQtMinusBtn w-7 h-7 flex items-center justify-center rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="RentmyQtPlusBtn">
                  <i class="rm rm-chevron-up text-sm"></i>
                </button>
                <input type="text" class="RentmyQtInput w-10 h-8 text-center text-sm font-semibold border border-[var(--brand-border)] rounded-lg bg-white text-[var(--brand-text)] focus:outline-none focus:border-[var(--brand-primary)] transition" data-rentmyattr="RentmyQtInput">
                <button class="RentmyQtPlusBtn w-7 h-7 flex items-center justify-center rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="RentmyQtMinusBtn">
                  <i class="rm rm-chevron-down text-sm"></i>
                </button>
              </div>
              <div type-button class="RentmyTicketOtherInfo flex-1">
                <h5 class="text-sm font-semibold text-[var(--brand-text)]" data-rentmyattr="fieldLabel">Adult</h5>
                <span class="text-sm font-bold text-[var(--brand-primary)]" data-rentmyattr="fieldValue">zł10.00</span>
              </div>
            </div>
            <div class="QtyContainer mt-2" data-rentmyattr="QtyContainer">
              <small class="AvailableItem text-xs text-[var(--brand-text-muted)]">
                <span data-rentmyattr="RentmyAvailableLabel">Available</span>:
                <span class="font-semibold text-[var(--brand-text)]" data-rentmyattr="RentmyAvailableQty">17</span>
              </small>
            </div>
          </div>
        </div>

        <!-- Rental start date -->
        <div class="RentMyRentalStartDate" data-rentmyattr="RentMyRentalStartDate">
          <div data-rentmyattr="usualDateRange">
            <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentalStartDateTitle">Select Rental Start Date</h6>
            <ul class="flex flex-wrap gap-2 mb-2" data-rentmyattr="RentalStartDateList">
              <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="Today">Today</li>
              <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="Tomorrow">Tomorrow</li>
              <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="PickDate">Pick Date</li>
            </ul>
            <span class="text-sm text-[var(--brand-primary)] font-medium" data-rentmyattr="RentalStartDateSelectedLabel">Today 08:00 AM</span>
            <div id="RentmyInlineCalendar_ForStartDates" class="mt-2"></div>
          </div>
        </div>

        <!-- Exact times -->
        <div class="RentMyBookingExactTimes" data-rentmyattr="RentMyBookingExactTimes">
          <div data-rentmyattr="TimeArea">
            <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="TitleTag">Select Start time</h6>
            <ul class="flex flex-wrap gap-2">
              <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="exactTimeItem" data-rentmyattr="activeClass=timeActive">12:00 AM</li>
            </ul>
          </div>
          <div class="TourNotAvailableMsg mt-2 text-sm text-[var(--brand-danger)] bg-[var(--brand-danger-light)] border border-[var(--brand-danger)] rounded-lg px-3 py-2" data-rentmyattr="TourNotAvailableMessageArea">
            This tour is not available on the date you selected. Please pick another date.
          </div>
        </div>

        <!-- Rental date range -->
        <div class="RentMyRentalDateRange" data-rentmyattr="RentMyRentalDateRange">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentalDateRangeTitle">Rental Date Range</h6>
          <ul class="flex flex-wrap gap-2 mb-2" data-rentmyattr="RentalDateRangeList">
            <li class="flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg border border-[var(--brand-border)] cursor-pointer hover:border-[var(--brand-primary)] transition-colors text-sm" data-rentmyattr="RentalDateRangeItem">
              <span class="font-medium text-[var(--brand-text)]" data-rentmyattr="PricePreText">1 hour</span>
              <span class="font-bold text-[var(--brand-primary)]" data-rentmyattr="Price">$10.00</span>
            </li>
          </ul>
        </div>

        <!-- Rental end date -->
        <div class="RentMyRentalDateRange" data-rentmyattr="RentMyRentalEndDate">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentalDateRangeTitle">Rental Date Range</h6>
          <ul class="flex flex-wrap gap-2 mb-2">
            <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="RentalEndDatePicker">
              <span data-rentmyattr="rangePickerLabel">Select rental date</span>
            </li>
          </ul>
          <span class="text-sm text-[var(--brand-primary)] font-medium" data-rentmyattr="RentalEndDateSelectedLabel">Today 09:00 AM</span>
          <div id="RentmyInlineCalendar_ForEndDates" class="mt-2"></div>
        </div>

        <!-- Exact select duration -->
        <div class="RentMyExactSelectDuration" data-rentmyattr="RentMyExactSelectDuration">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentMyExactSelectDurationTitle">Select Duration</h6>
          <ul class="flex flex-wrap gap-2" data-rentmyattr="RentMyExactSelectDurationList">
            <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="RentMyExactSelectDurationItem">Exact Select Duration</li>
          </ul>
        </div>

        <!-- Exact select time -->
        <div class="RentMyExactSelectTime" data-rentmyattr="RentMyExactSelectTime">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentMyExactSelectTimeTitle">Select Exact Start time</h6>
          <ul class="flex flex-wrap gap-2" data-rentmyattr="RentMyExactSelectTimeList">
            <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="RentMyExactSelectTimeItem">Exact Times</li>
          </ul>
        </div>

        <!-- Delivery options -->
        <div class="RentMyDeliveryOptions" data-rentmyattr="RentMyDeliveryOptions">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="DeliveryOptionsTitle">Delivery Options</h6>
          <ul class="flex flex-wrap gap-2" data-rentmyattr="DeliveryOptionsList">
            <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="DeliveryOptionsItem">Local Move</li>
          </ul>
        </div>

        <div class="RentMyDeliveryOptions" data-rentmyattr="RentMyDeliveryTypes">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="DeliveryTypesTitle">Delivery Options</h6>
          <ul class="flex flex-wrap gap-2" data-rentmyattr="DeliveryTypesList">
            <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="DeliveryTypesItem">Local Move</li>
          </ul>
        </div>

        <!-- Select location -->
        <div class="RentMySelectLocation" data-rentmyattr="RentMySelectLocation">
          <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="SelectLocationTitle">Select Location</h6>
          <ul class="flex flex-wrap gap-2" data-rentmyattr="SelectLocationList">
            <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="SelectLocationItem">Default location</li>
          </ul>
        </div>

        <!-- Quantity -->
        <div class="QuantityContainer" data-rentmyattr="RentmyQuantityContainer">
          <label class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2 block" data-rentmyattr="QuantityContainerTitle">Quantity</label>
          <div class="QuantityBtn inline-flex items-center border border-[var(--brand-border)] rounded-xl overflow-hidden">
            <button class="RentMyBtn w-9 h-10 flex items-center justify-center text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors text-lg font-semibold" data-rentmyattr="QuantityDecrementBtn">-</button>
            <input type="text" autocomplete="off" name="qty" class="InputQuantity w-12 h-10 text-center text-sm font-semibold text-[var(--brand-text)] border-x border-[var(--brand-border)] focus:outline-none bg-white" data-rentmyattr="NumberOfQuantity">
            <button class="RentMyBtn w-9 h-10 flex items-center justify-center text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors text-lg font-semibold" data-rentmyattr="QuantityIncrementBtn">+</button>
          </div>
          <small class="info block mt-1.5 text-xs text-[var(--brand-text-muted)]">
            <span data-rentmyattr="RentmyAvailableLabel">Available</span>
            <span class="font-semibold text-[var(--brand-text)]" data-rentmyattr="RentmyAvailableQty">17</span>
          </small>
        </div>
 
        <div data-rentmyattr="RentmyAvailableNotice" class="text-sm text-[var(--brand-text-muted)]"></div>

        <!-- Product ID -->
        <div class="text-xs text-[var(--brand-text-muted)]" data-rentmyattr="ProductIdArea">
          <strong class="text-[var(--brand-text)]" data-rentmyattr="ProductIdLabel">Product ID :</strong>
          <span data-rentmyattr="ProductIdNo"> 000</span>
        </div>

        <!-- Cart / Wishlist -->
        <div class="RentMyCartBtnArea flex flex-wrap gap-3" data-rentmyattr="RentMyCartBtnArea">
          <button class="RentMyBtn RentMyAddCartBtn flex-1 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-bold rounded-xl px-5 py-3 transition-colors uppercase tracking-wide" data-rentmyattr="RentMyAddCartBtn">
            <i class="rm rm-cart text-base mr-1.5"></i> Add To Cart
          </button>
          <button class="RentMyBtn RentMyAddWishlistBtn inline-flex items-center gap-1.5 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-3 transition-colors" data-rentmyattr="RentMyAddToWishlistBtn">
            <i class="rm rm-heart-outline text-base"></i> Add To Wishlist
          </button>
        </div>

      </div>
    </div>
  </div>

  <!-- Product description -->
  <div class="RentMyProductDescription max-w-screen-xl mx-auto px-4 mt-8">
    <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-6">
      <h3 class="RentMyProductDesTitle text-base font-bold text-[var(--brand-text)] mb-4">Product Description</h3>
      <div class="RentMyProductDesBody text-sm text-[var(--brand-text-muted)] leading-relaxed" data-rentmyattr="RentMyProductDescription"></div>
    </div>
  </div>

  <!-- Related products -->
  <div class="RentMyRelatedProduct max-w-screen-xl mx-auto px-4 py-10">
    <h3 class="RentMyRelatedProductTitle text-lg font-bold text-[var(--brand-text)] mb-6">Related Products</h3>
    <div class="RentMyRelatedProductBody">
      <div class="RentMyRow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5" data-rentmyattr="RentMyRelatedProducts">
        <div class="RentMyProductItem" data-rentmyattr="RentMyProductItem">
          <div class="RentMyProductItemInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div class="RentMyProductImg relative">
              <a href="#" data-rentmyattr="RentMyProductImageUrl">
                <img data-rentmyattr="RentMyProductImage" src="" class="ProductImg w-full aspect-square object-cover" alt="">
              </a>
              <div class="RentMyProductOverlay absolute inset-0 bg-black/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="WishlistSingleItemOption" data-rentmyattr="WishListBtnArea">
                  <button class="WishlistAddButton w-9 h-9 rounded-full bg-white flex items-center justify-center text-[var(--brand-text)] hover:text-[var(--brand-danger)] transition-colors" data-rentmyattr="RentMyAddToWishListBtn">
                    <i class="rm rm-heart-outline text-base"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="RentMyProductBody p-4 flex flex-col gap-2">
              <h4 class="ProductName text-sm font-semibold text-[var(--brand-text)] truncate" data-rentmyattr="RentMyProductName">Product_name</h4>
              <h5 class="ProductPrice text-sm font-bold text-[var(--brand-primary)]" data-rentmyattr="RentMyProductPrice">product_price</h5>
              <div class="ProductButton flex gap-2" data-rentmyattr="ProductButtons">
                <a class="ProductDetailsBtn flex-1 text-center text-xs font-medium border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] rounded-lg px-3 py-1.5 transition-colors" href="#" data-rentmyattr="RentMyViewDetailsBtn">View Details</a>
                <button class="ProductCartBtn flex-1 text-xs font-semibold bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white rounded-lg px-3 py-1.5 transition-colors" data-rentmyattr="RentMyAddToCartBtn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

 

<!-- In page cart widget -->
<div class="RentMyWrapperInpageCartWidget RentMyWrapper"></div>
', "status" => 1],
            ["slug" => "package-details", "name" => "Package Details", "contents" => '<div id="wrapper" class="RentMyWrapperPackageDetails RentMyWrapper bg-[var(--brand-surface)] min-h-screen" data-rentmy="">
  <div data-rentmyattr="RentmyPackageComponent">

    <section id="content">
      <div class="content-wrap py-8 px-4">
        <div class="container max-w-screen-xl mx-auto">
          <div class="single-product">

            <div class="RentMyProductPackageRow flex flex-col lg:flex-row gap-8">

              <!-- Image gallery -->
              <div class="RentMyProductDetilsImg flex flex-col gap-3 lg:w-[420px] flex-shrink-0">
                <div class="RentMyProductDetailsImgShow rounded-2xl overflow-hidden border border-[var(--brand-border)] bg-white aspect-square">
                  <img data-rentmyattr="RentMyProductImage" src="" alt="" class="w-full h-full object-cover">
                </div>
                <div class="RentMyProductDetailsImgList">
                  <ul class="flex flex-row lg:flex-col gap-2" data-rentmyattr="RentMyProductImages">
                    <li class="ActiveImg w-16 h-16 rounded-xl overflow-hidden border-2 border-[var(--brand-primary)] cursor-pointer flex-shrink-0">
                      <img src="" alt="" class="w-full h-full object-cover">
                    </li>
                    <li class="w-16 h-16 rounded-xl overflow-hidden border border-[var(--brand-border)] cursor-pointer hover:border-[var(--brand-primary)] transition-colors flex-shrink-0">
                      <img src="" alt="" class="w-full h-full object-cover">
                    </li>
                    <li class="w-16 h-16 rounded-xl overflow-hidden border border-[var(--brand-border)] cursor-pointer hover:border-[var(--brand-primary)] transition-colors flex-shrink-0">
                      <img src="" alt="" class="w-full h-full object-cover">
                    </li>
                    <li class="w-16 h-16 rounded-xl overflow-hidden border border-[var(--brand-border)] cursor-pointer hover:border-[var(--brand-primary)] transition-colors flex-shrink-0">
                      <img src="" alt="" class="w-full h-full object-cover">
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Product info -->
              <div class="RentMyProductDetilsInfo flex-1 min-w-0" data-rentmyattr="RentMyProductDetilsInfo">
                <div class="product-payment-details bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-6 flex flex-col gap-3">

                  <h2 class="RentMyProductName text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="RentMyProductName">{{ product_name }}</h2>

                  <div class="ShortDescription text-sm text-[var(--brand-text-muted)] leading-relaxed" data-rentmyattr="CustomFieldShortDesc">
                    <p>Default Description</p>
                  </div>

                  <!-- Buy/Rent toggle -->
                  <div class="RentMyBuyRentToggle" data-rentmyattr="RentMyBuyRentToggle">
                    <label for="BuyRentToggleSwitch" class="BuyRentToggleSwitch inline-flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" id="BuyRentToggleSwitch" data-rentmyattr="BuyRentToggleSwitch" class="sr-only peer">
                      <div class="ToggleSwitchRound relative w-11 h-6 bg-[var(--brand-border)] peer-checked:bg-[var(--brand-primary)] rounded-full transition-colors duration-200">
                        <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 group-has-[input:checked]:translate-x-5"></span>
                      </div>
                    </label>
                  </div>

                  <!-- Price -->
                  <div class="flex flex-col gap-1">
                    <h2 class="RentMyProductPrice text-xl font-bold text-[var(--brand-primary)]" data-rentmyattr="RentMyProductPrice">{{ product_price_text }}</h2>
                    <h5 class="ProductPrice text-xs text-[var(--brand-text-muted)]" data-rentmyattr="RentMyProductPriceAsLowPerDay">As low as $55.00 per day</h5>
                  </div>

                  <!-- Recurring pricing -->
                  <div class="RentMyRecurring" data-rentmyattr="RentMyRecurring">
                    <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RecurringTitle">Recurring Pricing</h6>
                    <ul class="flex flex-wrap gap-2" data-rentmyattr="RecurringList">
                      <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="RecurringItem">Recurring</li>
                    </ul>
                  </div>

                  <!-- Variants -->
                  <div class="RentMyVariant" data-rentmyattr="RentMyVariant">
                    <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="VariantTitle">Rent My Variant Sizes</h6>
                    <ul class="flex flex-wrap gap-2" data-rentmyattr="VariantList">
                      <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="VariantItem">Small</li>
                    </ul>
                  </div>

                  <!-- Product options -->
                  <div class="RentMyProductOptions" data-rentmyattr="RentMyProductOptions">
                    <div class="CustomFieldInner">
                      <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="ProductOptionsTitle">Product Options</h6>
                      <ul class="flex flex-col gap-3" data-rentmyattr="ProductOptionsItem">
                        <div data-rentmyattr="type-select">
                          <p class="text-xs font-medium text-[var(--brand-text-muted)] mb-1" data-rentmyattr="fieldLabel"></p>
                          <select class="w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition"></select>
                        </div>
                        <div data-rentmyattr="type-button">
                          <p class="text-xs font-medium text-[var(--brand-text-muted)] mb-1" data-rentmyattr="fieldLabel"></p>
                          <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors inline-flex" data-rentmyattr="fieldValue"></li>
                        </div>
                        <div data-rentmyattr="type-radio"></div>
                        <div data-rentmyattr="type-richtext">
                          <p class="text-xs font-medium text-[var(--brand-text-muted)] mb-1" data-rentmyattr="fieldLabel"></p>
                          <li class="text-sm text-[var(--brand-text-muted)]" data-rentmyattr="fieldValue"></li>
                        </div>
                      </ul>
                    </div>
                  </div>

                  <!-- Rental start date -->
                  <div class="RentMyRentalStartDate" data-rentmyattr="RentMyRentalStartDate">
                    <div data-rentmyattr="usualDateRange">
                      <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentalStartDateTitle">Select Rental Start Date</h6>
                      <ul class="flex flex-wrap gap-2 mb-2" data-rentmyattr="RentalStartDateList">
                        <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="Today">Today</li>
                        <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="Tomorrow">Tomorrow</li>
                        <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="PickDate">Pick Date</li>
                      </ul>
                      <span class="text-sm text-[var(--brand-primary)] font-medium" data-rentmyattr="RentalStartDateSelectedLabel">Today 08:00 AM</span>
                      <div id="RentmyInlineCalendar_ForStartDates" class="mt-2"></div>
                    </div>
                  </div>

                  <!-- Exact times -->
                  <div class="RentMyBookingExactTimes" data-rentmyattr="RentMyBookingExactTimes">
                    <div data-rentmyattr="TimeArea">
                      <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="TitleTag">Select Start time</h6>
                      <ul class="flex flex-wrap gap-2">
                        <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="exactTimeItem" data-rentmyattr="activeClass=timeActive">12:00 AM</li>
                      </ul>
                    </div>
                    <div class="TourNotAvailableMsg mt-2 text-sm text-[var(--brand-danger)] bg-[var(--brand-danger-light)] border border-[var(--brand-danger)] rounded-lg px-3 py-2" data-rentmyattr="TourNotAvailableMessageArea">
                      This tour is not available on the date you selected. Please pick another date.
                    </div>
                  </div>

                  <!-- Rental date range -->
                  <div class="RmRentalOption" data-rentmyattr="RentMyRentalDateRange">
                    <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentalDateRangeTitle">Rental Date Range</h6>
                    <ul class="flex flex-wrap gap-2" data-rentmyattr="RentalDateRangeList">
                      <li class="flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg border border-[var(--brand-border)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors text-sm" data-rentmyattr="RentalDateRangeItem" data-rentmyattr="activeClass=RmDaterangeActive">
                        <div class="RmRentalOptionDaytime font-medium text-[var(--brand-text)]" data-rentmyattr="PricePreText">1 day</div>
                        <div class="text-[var(--brand-primary)] font-semibold" data-rentmyattr="Price">$10.00</div>
                      </li>
                    </ul>
                  </div>

                  <!-- Rental end date -->
                  <div class="RentMyRentalDateRange" data-rentmyattr="RentMyRentalEndDate">
                    <ul class="flex flex-wrap gap-2 mb-2">
                      <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="RentalEndDatePicker">
                        <span data-rentmyattr="rangePickerLabel">Select rental date</span>
                      </li>
                    </ul>
                    <span class="text-sm text-[var(--brand-primary)] font-medium" data-rentmyattr="RentalEndDateSelectedLabel">Today 09:00 AM</span>
                    <div id="RentmyInlineCalendar_ForEndDates" class="mt-2"></div>
                  </div>

                  <!-- Exact select duration -->
                  <div class="RentMyExactSelectDuration" data-rentmyattr="RentMyExactSelectDuration">
                    <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentMyExactSelectDurationTitle">Select Duration</h6>
                    <ul class="flex flex-wrap gap-2" data-rentmyattr="RentMyExactSelectDurationList">
                      <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-primary)] bg-[var(--brand-primary-light)] text-[var(--brand-primary)] cursor-pointer ExactSelectDurationActive transition-colors" data-rentmyattr="RentMyExactSelectDurationItem">Exact Select Duration</li>
                    </ul>
                  </div>

                  <!-- Exact select time -->
                  <div class="RentMyExactSelectTime" data-rentmyattr="RentMyExactSelectTime">
                    <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="RentMyExactSelectTimeTitle">Select Exact Start time</h6>
                    <ul class="flex flex-wrap gap-2" data-rentmyattr="RentMyExactSelectTimeList">
                      <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-primary)] bg-[var(--brand-primary-light)] text-[var(--brand-primary)] cursor-pointer ExactSelectTimeActive transition-colors" data-rentmyattr="RentMyExactSelectTimeItem">Exact Times</li>
                    </ul>
                  </div>

                  <!-- Delivery options -->
                  <div class="RentMyDeliveryOptions" data-rentmyattr="RentMyDeliveryOptions">
                    <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="DeliveryOptionsTitle">Delivery Options</h6>
                    <ul class="flex flex-wrap gap-2" data-rentmyattr="DeliveryOptionsList">
                      <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="DeliveryOptionsItem">Local Move</li>
                    </ul>
                  </div>

                  <div class="RentMyDeliveryOptions" data-rentmyattr="RentMyDeliveryTypes">
                    <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="DeliveryTypesTitle">Delivery Options</h6>
                    <ul class="flex flex-wrap gap-2" data-rentmyattr="DeliveryTypesList">
                      <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="DeliveryTypesItem">Local Move</li>
                    </ul>
                  </div>

                  <!-- Select location -->
                  <div class="RentMySelectLocation" data-rentmyattr="RentMySelectLocation">
                    <h6 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" data-rentmyattr="SelectLocationTitle">Select Location</h6>
                    <ul class="flex flex-wrap gap-2" data-rentmyattr="SelectLocationList">
                      <li class="text-sm px-3 py-1.5 rounded-lg border border-[var(--brand-border)] text-[var(--brand-text-muted)] cursor-pointer hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors" data-rentmyattr="SelectLocationItem">Default location</li>
                    </ul>
                  </div>

                  <!-- Quantity -->
                  <div class="QuantityContainer" data-rentmyattr="RentmyQuantityContainer">
                    <label class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2 block" data-rentmyattr="QuantityContainerTitle">Quantity</label>
                    <div class="QuantityBtn inline-flex items-center border border-[var(--brand-border)] rounded-xl overflow-hidden">
                      <button class="RentMyBtn w-9 h-10 flex items-center justify-center text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors text-lg font-semibold" data-rentmyattr="QuantityDecrementBtn">-</button>
                      <input type="text" autocomplete="off" name="qty" class="InputQuantity w-12 h-10 text-center text-sm font-semibold text-[var(--brand-text)] border-x border-[var(--brand-border)] focus:outline-none bg-white" data-rentmyattr="NumberOfQuantity">
                      <button class="RentMyBtn w-9 h-10 flex items-center justify-center text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors text-lg font-semibold" data-rentmyattr="QuantityIncrementBtn">+</button>
                    </div>
                    <small class="info block mt-1.5 text-xs text-[var(--brand-text-muted)]">
                      <span data-rentmyattr="RentmyAvailableLabel">Available:</span>
                      <span class="ms-1 font-semibold text-[var(--brand-text)]" data-rentmyattr="RentmyAvailableQty">17</span>
                    </small>
                  </div>

                  <div data-rentmyattr="RentmyAvailableNotice" class="text-sm text-[var(--brand-text-muted)]"></div>

                  <!-- Cart / Wishlist buttons -->
                  <div class="RentMyCartBtnArea flex flex-wrap gap-3" data-rentmyattr="RentMyCartBtnArea">
                    <button class="RentMyBtn RentMyAddCartBtn flex-1 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-bold rounded-xl px-5 py-3 transition-colors uppercase tracking-wide" data-rentmyattr="RentMyAddCartBtn">
                      <i class="rm rm-cart text-base mr-1.5"></i> Add to Cart
                    </button>
                    <button class="RentMyBtn RentMyAddWishlistBtn inline-flex items-center gap-1.5 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-3 transition-colors" data-rentmyattr="RentMyAddToWishlistBtn">
                      <i class="rm rm-heart-outline text-base"></i> Add To Wishlist
                    </button>
                  </div>

                </div>
              </div>

              <!-- Package area -->
              <div class="RentMyProductPackageArea lg:w-72 flex-shrink-0" data-rentmyattr="RentMyProductPackageArea">
                <div class="RentMyProductPackageAreaInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-5" data-rentmyattr="RentMyProductPackageAreaInner">
                  <h6 class="text-sm font-bold text-[var(--brand-text)] mb-4" data-rentmyattr="RentMyProductPackageAreaTitle">Package includes</h6>
                  <div data-rentmyattr="RentMyProductPackageContent" class="mb-3"></div>
                  <div class="PackageSingleProduct flex flex-col gap-3" data-rentmyattr="PackageSingleProduct">
                    <div class="PackageProductName" data-rentmyattr="PackageProductName">
                      <h5 class="text-sm font-semibold text-[var(--brand-text)]" data-rentmyattr="PackageProductNameTitle">test product buy (2)</h5>
                    </div>
                    <div class="PakageProductVarient" data-rentmyattr="PakageProductVarient">
                      <div class="PakageProductVarientInner" data-rentmyattr="PakageProductVarientInner">
                        <select class="PakageProductVarientInnerSelect w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition" data-rentmyattr="PakageProductVarientInnerSelect">
                          <option data-rentmyattr="PakageProductVarientInnerOption" value="276077">size: Blue, color: red</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Product description -->
            <div class="RentMyProductDescription mt-8 bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-6">
              <h3 class="RentMyProductDesTitle text-base font-bold text-[var(--brand-text)] mb-4">Product Description</h3>
              <div class="RentMyProductDesBody text-sm text-[var(--brand-text-muted)] leading-relaxed" data-rentmyattr="RentMyProductDescription"></div>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
</div>

<!-- Related Products -->
<div class="RentMyRelatedProduct bg-[var(--brand-surface)] px-4 py-10">
  <div class="max-w-screen-xl mx-auto">
    <h3 class="RentMyRelatedProductTitle text-lg font-bold text-[var(--brand-text)] mb-6">Related Products</h3>
    <div class="RentMyRelatedProductBody">
      <div class="RentMyRow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5" data-rentmyattr="RentMyRelatedProducts">

        <div class="RentMyProductItem" data-rentmyattr="RentMyProductItem">
          <div class="RentMyProductItemInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div class="RentMyProductImg relative">
              <a href="#" data-rentmyattr="RentMyProductImageUrl">
                <img data-rentmyattr="RentMyProductImage" class="ProductImg w-full aspect-square object-cover" alt="">
              </a>
              <div class="RentMyProductOverlay absolute inset-0 bg-black/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <a class="ProductCartIcon w-9 h-9 rounded-full bg-white flex items-center justify-center text-[var(--brand-text)] hover:text-[var(--brand-primary)] transition-colors" href="#" data-rentmyattr="DetailsPageUrl">
                  <i class="rm rm-bag text-base"></i>
                </a>
                <div class="WishlistSingleItemOption" data-rentmyattr="WishListBtnArea">
                  <button class="WishlistAddButton w-9 h-9 rounded-full bg-white flex items-center justify-center text-[var(--brand-text)] hover:text-[var(--brand-danger)] transition-colors" data-rentmyattr="RentMyAddToWishListBtn">
                    <i class="rm rm-heart-outline text-base"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="RentMyProductBody p-4 flex flex-col gap-2">
              <h4 class="ProductName text-sm font-semibold text-[var(--brand-text)] truncate" data-rentmyattr="RentMyProductName">Product_name</h4>
              <h5 class="ProductPrice text-sm font-bold text-[var(--brand-primary)]" data-rentmyattr="RentMyProductPrice">product_price</h5>
              <div class="ProductButton flex gap-2" data-rentmyattr="ProductButtons">
                <a class="ProductDetailsBtn flex-1 text-center text-xs font-medium border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] rounded-lg px-3 py-1.5 transition-colors" href="#" data-rentmyattr="RentMyViewDetailsBtn">View Details</a>
                <button class="ProductCartBtn flex-1 text-xs font-semibold bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white rounded-lg px-3 py-1.5 transition-colors" href="#" data-rentmyattr="RentMyAddToCartBtn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- In page cart widget -->
<div class="RentMyWrapperInpageCartWidget RentMyWrapper"></div>
', "status" => 1],
            ["slug" => "category-products", "name" => "Category Products", "contents" => '', "status" => 1],
            ["slug" => "cart", "name" => "Cart", "contents" => '<div class="RentMyCartWrapper RentMyWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="container-fullwidth max-w-screen-xl mx-auto" data-rentmyattr="InsideContainer">

    <!-- Rental date bar -->
    <div class="RentMyRow mb-6" data-rentmyattr="RenatalDateArea">
      <div class="RentMyFullwidth">
        <div class="inline-flex items-center gap-2 bg-white border border-[var(--brand-border)] rounded-xl px-4 py-2.5 text-sm shadow-sm">
          <span class="RentMyCartDateRange flex items-center gap-2 text-[var(--brand-text-muted)]" data-rentmyattr="DateRange">
            <i class="rm rm-calendar"></i>
            <b class="text-[var(--brand-text)] font-semibold">Rental Dates</b>
            <span data-rentmyattr="DateText" class="text-[var(--brand-text)]">11/22/2023</span>
            <i class="rm rm-edit date-editicon text-[var(--brand-primary)] cursor-pointer hover:opacity-70 transition-opacity" data-rentmyattr="EditDate"></i>
          </span>
        </div>
        <div class="RentMyDatePicker mt-3 hidden" id="RentMyDatePicker" data-rentmyattr="DatePicker">
          <button class="RentMyBtn RentMyBtnBlack mt-2 border border-[var(--brand-border)] text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors" data-rentmyattr="BtnCancel">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Cart table -->
    <div class="RentMyTableResponsive bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden mb-6">
      <table class="RentMyTable RentMyTableStriped RentMyCartTable w-full text-sm" data-rentmyattr="RentMyCartTable">
        <thead class="bg-[var(--brand-surface)] border-b border-[var(--brand-border)]">
          <tr>
            <th class="px-4 py-3 text-left text-xs font-semibold text-[var(--brand-text-muted)] uppercase tracking-wider w-10"></th>
            <th class="px-4 py-3 text-left w-20"></th>
            <th class="px-4 py-3 text-left text-xs font-semibold text-[var(--brand-text-muted)] uppercase tracking-wider">Product</th>
            <th class="px-4 py-3 text-left text-xs font-semibold text-[var(--brand-text-muted)] uppercase tracking-wider">Unit Price</th>
            <th class="px-4 py-3 text-left text-xs font-semibold text-[var(--brand-text-muted)] uppercase tracking-wider">Quantity</th>
            <th class="px-4 py-3 text-right text-xs font-semibold text-[var(--brand-text-muted)] uppercase tracking-wider">Subtotal</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[var(--brand-border)]">
          <tr class="hover:bg-[var(--brand-surface)] transition-colors" data-rentmyattr="CartItem">

            <!-- Delete -->
            <td class="px-4 py-4" data-rentmyattr="DeleteIconArea">
              <a class="CartRemoveProduct text-gray-400 hover:text-[var(--brand-danger)] transition-colors cursor-pointer">
                <i class="rm rm-trash text-sm"></i>
              </a>
            </td>

            <!-- Image -->
            <td class="px-4 py-4" data-rentmyattr="ImageArea">
              <div class="ImageAreaWrapper w-14 h-14 rounded-lg overflow-hidden border border-[var(--brand-border)] bg-[var(--brand-surface)]">
                <img test="ImageArea" src="" class="cart product img w-full h-full object-cover" alt="" />
              </div>
            </td>

            <!-- Name -->
            <td class="px-4 py-4 font-medium text-[var(--brand-text)]" data-rentmyattr="ItemNameArea">
              Product1
            </td>

            <!-- Unit price -->
            <td class="px-4 py-4 text-[var(--brand-text-muted)]" data-rentmyattr="ItemPrice">
              $50.00
            </td>

            <!-- Qty -->
            <td class="px-4 py-4" data-rentmyattr="IncrDecrArea">
              <div class="QuantityContainer">
                <div class="QuantityBtn inline-flex items-center border border-[var(--brand-border)] rounded-lg overflow-hidden">
                  <button class="RentMyBtn w-8 h-8 flex items-center justify-center text-[var(--brand-text-muted)] hover:bg-[var(--brand-surface)] transition-colors" data-rentmyattr="DecrementBtn">−</button>
                  <input type="text" autocomplete="off" name="qty" class="InputQuantity w-10 h-8 text-center text-sm border-x border-[var(--brand-border)] text-[var(--brand-text)] focus:outline-none" data-rentmyattr="QuantityInput" />
                  <button class="RentMyBtn w-8 h-8 flex items-center justify-center text-[var(--brand-text-muted)] hover:bg-[var(--brand-surface)] transition-colors" data-rentmyattr="IncrementBtn">+</button>
                </div>
              </div>
            </td>

            <!-- Subtotal -->
            <td class="px-4 py-4 text-right font-semibold text-[var(--brand-text)]" data-rentmyattr="ItemPriceArea">
              $255.00
            </td>

          </tr>
        </tbody>
      </table>
    </div>

    <!-- Summary row -->
    <div class="RentMyRow RentMyCartSummery flex flex-col lg:flex-row gap-6">

      <!-- Left: coupon + action buttons -->
      <div class="RentMyHalfwidth flex-1 flex flex-col gap-4">

        <!-- Coupon -->
        <div class="RentMyCouponCode RentMyFlex flex gap-2">
          <input type="text" class="RentMyInputField flex-1 border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-white text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition" placeholder="Enter coupon code" data-rentmyattr="CouponInput" />
          <button type="submit" class="RentMyBtn RentMyBtnBlack whitespace-nowrap bg-[var(--brand-secondary)] hover:bg-[var(--brand-secondary-mid)] text-white text-sm font-medium rounded-lg px-4 py-2.5 transition-colors" data-rentmyattr="ApplyCouponBtn">Apply Coupon</button>
        </div>

        <!-- Action buttons -->
        <div class="RentMyButtonGroup CheckoutMakeContinueBtn flex flex-col sm:flex-row gap-3">
          <button class="RentMyBtn RentMyBtnBlack border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2.5 transition-colors" data-rentmyattr="ContinueShoppingBtn">
            Continue Shopping
          </button>
          <div class="MakeContinue flex gap-3">
            <button type="submit" class="RentMyBtn RentMyBtnBlack border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2.5 transition-colors" data-rentmyattr="MakeQuotoBtn">
              Make Quote
            </button>
            <button class="RentMyBtn RentMyBtnBlack bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors" data-rentmyattr="ProceedCheckoutBtn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <!-- Right: totals -->
      <div class="RentMyHalfwidth w-full lg:w-80 xl:w-96 bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-6">
        <h4 class="RentMyCartTotal text-base font-bold text-[var(--brand-text)] mb-4 pb-3 border-b border-[var(--brand-border)]">Cart Totals</h4>
        <table class="RentMyTable RentMySummeryTable w-full text-sm" data-rentmyattr="RentMySummeryTable">
          <tbody class="divide-y divide-[var(--brand-border)]">
            <tr>
              <td class="py-2.5 text-[var(--brand-text-muted)]" data-rentmyattr="SubtotalLabel">Subtotal</td>
              <td class="py-2.5 text-right font-medium text-[var(--brand-text)]"><b data-rentmyattr="SubtotalAmount">€0.00</b></td>
            </tr>
            <tr data-rentmyattr="TaxesFeesLabel">
              <td class="py-2.5 text-[var(--brand-text-muted)]">Taxes &amp; Fees</td>
              <td class="py-2.5 text-right text-[var(--brand-text)]"><span data-rentmyattr="TaxesFees">€0.00</span></td>
            </tr>
            <tr data-rentmyattr="DepositeAmountRow">
              <td class="py-2.5 text-[var(--brand-text-muted)]">Deposit Amount</td>
              <td class="py-2.5 text-right text-[var(--brand-text)]"><span data-rentmyattr="DepositeAmount">€0.00</span></td>
            </tr>
            <tr data-rentmyattr="AdditionalChargeAmountRow">
              <td class="py-2.5 text-[var(--brand-text-muted)]">Order Fees &amp; Options</td>
              <td class="py-2.5 text-right text-[var(--brand-text)]"><span data-rentmyattr="AdditionalChargeAmount">€0.00</span></td>
            </tr>
            <tr>
              <td class="py-2.5 text-[var(--brand-text-muted)]" data-rentmyattr="lbl_shipping">Shipping Charge</td>
              <td class="py-2.5 text-right text-[var(--brand-text-muted)]" data-rentmyattr="shipping_value"><small>Calculated in next step</small></td>
            </tr>
            <tr data-rentmyattr="TaxAmountLabel">
              <td class="py-2.5 text-[var(--brand-text-muted)]">Tax</td>
              <td class="py-2.5 text-right text-[var(--brand-text)]"><span data-rentmyattr="TaxAmount">€0.00</span></td>
            </tr>
            <tr class="border-t-2 border-[var(--brand-border)]">
              <td class="pt-3 pb-1">
                <h5 class="font-bold text-base text-[var(--brand-text)]" data-rentmyattr="LblTotal">Total</h5>
              </td>
              <td class="pt-3 pb-1 text-right">
                <h5 class="font-bold text-base text-[var(--brand-primary)]"><span data-rentmyattr="TotalAmount">€0.00</span></h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <!-- Related products -->
    <div class="RentMyAddonProducts RentMyRelatedProduct mt-10" data-rentmyattr="RentMyRelatedProducts">
      <h3 class="RentMyRelatedProductTitle text-lg font-bold text-[var(--brand-text)] mb-5">Related Products</h3>
      <div class="RentMyRelatedProductBody">
        <div class="RentMyRow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          <div class="RentMyProductItem" data-rentmyattr="RentMyProductItem">
            <div class="RentMyProductItemInner group bg-white rounded-xl border border-[var(--brand-border)] overflow-hidden shadow-sm hover:shadow-md transition-shadow">

              <div class="RentMyProductImg relative overflow-hidden aspect-square">
                <a href="#" data-rentmyattr="RentMyProductImageUrl">
                  <img data-rentmyattr="RentMyProductImage" src="" class="ProductImg w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="product img" />
                </a>
                <div class="RentMyProductOverlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity duration-200">
                  <a class="ProductCartIcon w-8 h-8 rounded-full bg-white/90 hover:bg-[var(--brand-primary)] hover:text-white text-[var(--brand-text)] flex items-center justify-center transition-colors" href="#" data-rentmyattr="DetailsPageUrl">
                    <i class="rm rm-bag text-sm"></i>
                  </a>
                  <div class="WishlistSingleItemOption" data-rentmyattr="WishListBtnArea">
                    <button class="WishlistAddButton w-8 h-8 rounded-full bg-white/90 hover:bg-[var(--brand-primary)] hover:text-white text-[var(--brand-text)] flex items-center justify-center transition-colors" data-rentmyattr="RentMyAddToWishListBtn">
                      <i class="rm rm-heart-outline text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="RentMyProductBody px-3 py-3">
                <h4 class="ProductName text-sm font-medium text-[var(--brand-text)] truncate mb-1" data-rentmyattr="RentMyProductName">Product_name</h4>
                <h5 class="ProductPrice text-sm font-bold text-[var(--brand-primary)] mb-2" data-rentmyattr="RentMyProductPrice">product_price</h5>
                <div class="ProductButton flex gap-2" data-rentmyattr="ProductButtons">
                  <a class="ProductDetailsBtn flex-1 text-center text-xs border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] rounded-lg py-1.5 transition-colors" href="#" data-rentmyattr="RentMyViewDetailsBtn">View Details</a>
                  <button class="ProductCartBtn flex-1 text-center text-xs bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white rounded-lg py-1.5 transition-colors" data-rentmyattr="RentMyAddToCartBtn">Add to Cart</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>
', "status" => 1],
            ["slug" => "checkout", "name" => "Checkout", "contents" => '<div id="RentMyCheckoutWrapper" class="RentMyCheckoutWrapper RentMyWrapper bg-gray-50 min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-8">

    <!-- Page Header -->
    <div class="max-w-7xl mx-auto mb-6">
        <h1 class="text-3xl font-bold text-gray-900">Checkout</h1>
        <p class="text-sm text-gray-500 mt-1">Complete your order below</p>
    </div>

    <!-- Sign In Banner -->
    <div class="max-w-7xl mx-auto mb-6">
        <div class="w-full lg:w-[calc(100%-380px-2rem)] flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 gap-3" data-rentmyattr="SignInPopupArea">
            <div class="flex items-center gap-3 min-w-0">
                <i class="rm rm-user"></i>
                <p class="text-sm text-gray-600 truncate">
                    Returning customer?
                    <span class="text-gray-400 mx-1" data-rentmyattr="WelcomeText">Welcome to</span>
                    <strong class="text-gray-800" data-rentmyattr="StoreName">Store</strong>
                </p>
            </div>
            <a class="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 border border-blue-300 hover:border-blue-400 bg-white hover:bg-blue-50 rounded-lg px-3 py-1.5 transition-all cursor-pointer whitespace-nowrap" data-rentmyattr="SignIn">
                <i class="rm rm-login"></i>
                Sign in
            </a>
        </div>
    </div>

    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 lg:gap-8 items-start">

        <!-- ═══════════════════════════════════════════ LEFT ═══ -->
        <div class="w-full lg:flex-1 lg:min-w-0 space-y-5">

            <!-- ── Billing Card ── -->
            <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden" data-rentmyattr="BillingBorder">
                <div class="bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-4">
                    <h2 class="text-sm font-semibold tracking-widest text-white uppercase">Billing Address</h2>
                </div>

                <form class="p-4 sm:p-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3" data-rentmyattr="BillingGeneralInfo">

                        <div class="flex flex-col gap-1.5" data-rentmyattr="FirstNameDiv">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name <span class="text-red-400">*</span></label>
                            <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="FirstName" placeholder="John" />
                        </div>

                        <div class="flex flex-col gap-1.5" data-rentmyattr="LastNameDiv">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Name <span class="text-red-400">*</span></label>
                            <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="LastName" placeholder="Doe" />
                        </div>

                        <div class="flex flex-col gap-1.5" data-rentmyattr="MobileDiv">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Mobile Number</label>
                            <div class="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent transition">
                                <span class="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border-r border-gray-300 cursor-pointer" data-rentmyattr="FlagArea">
                                    <img data-rentmyattr="RentMyRemoveMe" class="w-5 h-3.5 object-cover rounded-sm" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg" alt="NZ">
                                    <i data-rentmyattr="FlagIcon" class="RentmyCountryFlagIcon"></i>
                                    <span class="text-xs font-medium text-gray-600" data-rentmyattr="PhoneCode">+64</span>
                                </span>
                                <input type="text" class="flex-1 px-4 py-2.5 text-sm text-gray-800 outline-none bg-white" data-rentmyattr="Mobile" autocomplete="billing phone" placeholder="000 000 0000">
                            </div>
                        </div>

                        <div class="flex flex-col gap-1.5" data-rentmyattr="EmailDiv">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                            <input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="Email" placeholder="john@example.com" />
                        </div>

                        <div class="flex flex-col gap-1.5 sm:col-span-2" data-rentmyattr="CompanyDiv">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Company Name <span class="normal-case text-gray-400 font-normal">(Optional)</span></label>
                            <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="Company" placeholder="Acme Inc." />
                        </div>

                        <!-- Saved Address -->
                        <div class="sm:col-span-2 flex gap-6 pt-1" data-rentmyattr="AllSavedBililingAddress">
                            <label class="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer" data-rentmyattr="SingleAddress">
                                <input type="radio" name="select_address" value="rent" class="w-4 h-4 accent-emerald-600"> Use saved address
                            </label>
                            <label class="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer" data-rentmyattr="CreateAddress">
                                <input type="radio" name="select_address" value="rent" class="w-4 h-4 accent-emerald-600"> Create new
                            </label>
                        </div>

                        <div class="flex flex-col gap-1.5 sm:col-span-2">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide" data-rentmyattr="CountryLabel">Country</label>
                            <select class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition bg-white" data-rentmyattr="Country">
                                <option value="">Select country</option>
                            </select>
                        </div>

                        <div class="flex flex-col gap-1.5" data-rentmyattr="AddressLine1Div">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address Line 1 <span class="text-red-400">*</span></label>
                            <input type="text" placeholder="Enter a location" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="AddressLine1" />
                        </div>

                        <div class="flex flex-col gap-1.5" data-rentmyattr="AddressLine2Div">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address Line 2</label>
                            <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="AddressLine2" placeholder="Apt, suite, etc." />
                        </div>

                        <div class="flex flex-col gap-1.5" data-rentmyattr="CityDiv">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">City <span class="text-red-400">*</span></label>
                            <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="City" placeholder="New York" />
                        </div>

                        <div class="flex flex-col gap-1.5" data-rentmyattr="StateDiv">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">State</label>
                            <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="State" placeholder="NY" />
                        </div>

                        <div class="flex flex-col gap-1.5" data-rentmyattr="ZipCodeDiv">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Zipcode <span class="text-red-400">*</span></label>
                            <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="Zipcode" placeholder="10001" />
                        </div>
                    </div>

                    <!-- Additional Information -->
                    <details class="mt-6 border border-gray-200 rounded-xl overflow-hidden group" data-rentmyattr="BillingAdditionalInfo">
                        <summary class="flex items-center gap-2 px-5 py-3.5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors list-none">
                            <span class="w-5 h-5 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">+</span>
                            <span class="text-sm font-semibold text-gray-700">Additional Information</span>
                        </summary>
                        <div class="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                            <div class="flex flex-col gap-1.5" data-rentmyattr="SpecialComments">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Special Instructions / Comments</label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" placeholder="Any special notes..." />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="SpecialRequest">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Special Request</label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="DrivingLicence">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Driving Licence</label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" />
                            </div>
                        </div>
                    </details>

                    <!-- Custom Checkout Info -->
                    <details class="mt-4 border border-gray-200 rounded-xl overflow-hidden" data-rentmyattr="BillingCustomCheckoutInfo">
                        <summary class="flex items-center gap-2 px-5 py-3.5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors list-none">
                            <span class="w-5 h-5 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">+</span>
                            <span class="text-sm font-semibold text-gray-700"><span data-rentmyattr="title_custom_checkout">Custom checkout information</span></span>
                        </summary>
                        <div class="px-5 py-4">
                            <div data-rentmyattr="CustomField"></div>
                        </div>
                    </details>
                </form>
            </div>

            <!-- ── Fulfillment Card ── -->
            <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden" data-rentmyattr="FullfillmentArea" data-rentmyattr2="FullfillmentBorder">
                <div class="bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-4">
                    <h2 class="text-sm font-semibold tracking-widest text-white uppercase" data-rentmyattr="Title">Shipping Details</h2>
                </div>

                <div class="p-4 sm:p-6">
                    <!-- Tabs -->
                    <div class="border-b border-gray-200 mb-6">
                        <ul class="flex gap-3 -mb-px">
                            <li data-rentmyattr="PickupTab" class="[&_img]:w-8 [&_img]:h-8 [&_img]:object-contain"></li>
                            <li data-rentmyattr="ShippingTab" class="[&_img]:w-8 [&_img]:h-8 [&_img]:object-contain"></li>
                            <li data-rentmyattr="DeliveryTab" class="[&_img]:w-8 [&_img]:h-8 [&_img]:object-contain"></li>
                        </ul>
                    </div>

                    <!-- Pickup Locations -->
                    <div data-rentmyattr="PickupLocations">
                        <div class="space-y-2" data-rentmyattr="Location"></div>
                    </div>

                    <!-- Shipping & Delivery -->
                    <div data-rentmyattr="ShipAndDelivery">

                        <div class="space-y-2 mb-5" data-rentmyattr="ShippingAddressList">
                            <div data-rentmyattr="Address">
                                <label class="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                                    <input type="radio" name="shipping_address" value="rent" class="w-4 h-4 accent-emerald-600">
                                    Default location (5627 Covehaven Dr, Dallas, TX, US)
                                </label>
                            </div>
                            <div data-rentmyattr="CreateNew">
                                <label class="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                                    <input type="radio" name="shipping_address" value="rent" class="w-4 h-4 accent-emerald-600">
                                    Create New
                                </label>
                            </div>
                        </div>

                        <form class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 mt-2">
                            <div class="flex flex-col gap-1.5" data-rentmyattr="FirstNameDiv">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name <span class="text-red-400">*</span></label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="FirstName" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="LastNameDiv">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Name <span class="text-red-400">*</span></label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="LastName" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="MobileDiv">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Mobile Number <span class="text-red-400">*</span></label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="Mobile" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="EmailDiv">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                                <input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="Email" />
                            </div>
                            <div class="flex flex-col gap-1.5 sm:col-span-2" data-rentmyattr="CompanyDiv">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Company <span class="normal-case text-gray-400 font-normal">(Optional)</span></label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="Company" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="AddressLine1Div">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address Line 1 <span class="text-red-400">*</span></label>
                                <input type="text" placeholder="Enter a location" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="AddressLine1" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="AddressLine2Div">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address Line 2</label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="AddressLine2" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="CityDiv">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">City <span class="text-red-400">*</span></label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="City" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="StateDiv">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">State</label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="State" />
                            </div>
                            <div class="flex flex-col gap-1.5" data-rentmyattr="ZipCodeDiv">
                                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Zipcode <span class="text-red-400">*</span></label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" data-rentmyattr="Zipcode" />
                            </div>
                        </form>

                        <!-- Shipping Methods -->
                        <div class="mt-6 bg-gray-50 rounded-xl p-4" data-rentmyattr="ShippingMethods">
                            <h5 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Select Shipping Method</h5>
                            <div class="space-y-2" data-rentmyattr="AllMethods">
                                <div class="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-emerald-400 transition-colors cursor-pointer" data-rentmyattr="Method">
                                    <input type="radio" name="shipping_methods" value="rent" class="w-4 h-4 accent-emerald-600">
                                    <span class="flex-1 text-sm text-gray-700">Flat Rate</span>
                                    <strong class="text-sm text-gray-900">$33.99</strong>
                                </div>
                            </div>
                        </div>

                        <!-- Delivery Costs -->
                        <div class="mt-4 bg-gray-50 rounded-xl p-4" data-rentmyattr="DeliveryCosts">
                            <h5 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Delivery Cost</h5>
                            <div class="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-emerald-400 transition-colors cursor-pointer" data-rentmyattr="Cost">
                                <input type="radio" name="delivery_cost" value="rent" class="w-4 h-4 accent-emerald-600">
                                <span class="flex-1 text-sm text-gray-700">Zone A</span>
                                <strong class="text-sm text-gray-900">$33.99</strong>
                            </div>
                        </div>

                        <div class="mt-4 text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 hidden" data-rentmyattr="DeliveryOutsideAreaMsg">
                            ⚠ Your address is outside of our delivery area. Please contact us to make other arrangements.
                        </div>
                        <div class="mt-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 hidden" data-rentmyattr="DeliveryAddressErrorMsg">
                            Delivery is not possible for your address.
                        </div>

                        <div class="mt-5">
                            <button type="button" class="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors" data-rentmyattr="GetShippingMethodsBtn">
                                Get shipping method <i class="rm rm-arrow-right text-xs"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Multi-Distance Delivery Accordion -->
                    <div class="mt-6 space-y-3" data-rentmyattr="DeliveryTypeMultiDistance">

                        <!-- Drop Off -->
                        <details class="border border-gray-200 rounded-xl overflow-hidden" data-rentmyattr="MultiDistanceDropOffAddress">
                            <summary class="flex items-center justify-between px-5 py-3.5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors list-none">
                                <div class="flex items-center gap-3">
                                    <span class="text-sm font-semibold text-gray-800">Drop off Address</span>
                                    <span class="text-xs text-gray-400">
                                        <span data-rentmyattr="DropAddress1"></span>
                                        <span data-rentmyattr="DropAddress2"></span>
                                        <span data-rentmyattr="DropAddress3"></span>
                                    </span>
                                </div>
                                <i class="rm rm-chevron-down text-xs text-gray-400"></i>
                            </summary>
                            <div class="px-5 py-3 border-t border-gray-100">
                                <label class="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer" data-rentmyattr="SameAsAbove">
                                    <input type="checkbox" class="w-4 h-4 accent-emerald-600"> Same as billing address
                                </label>
                            </div>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="px-5 pb-5">
                                    <form class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="FirstNameDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="FirstName" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="LastNameDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Name</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="LastName" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="EmailDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label><input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="Email" /></div>
                                        <div class="flex flex-col gap-1.5 sm:col-span-2"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide" data-rentmyattr="CountryLabel">Country</label><select class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition bg-white" data-rentmyattr="Country"><option value="">Select country</option></select></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="AddressLine1Div"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address Line 1</label><input type="text" placeholder="Enter a location" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="AddressLine1" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="AddressLine2Div"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address Line 2</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="AddressLine2" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="CityDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">City</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="City" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="StateDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">State</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="State" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="ZipCodeDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Zipcode</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="Zipcode" /></div>
                                    </form>
                                </div>
                            </div>
                        </details>

                        <!-- Pickup Address -->
                        <details class="border border-gray-200 rounded-xl overflow-hidden" data-rentmyattr="MultiDistancePickupAddress">
                            <summary class="flex items-center justify-between px-5 py-3.5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors list-none">
                                <span class="text-sm font-semibold text-gray-800">Pickup Address</span>
                                <i class="rm rm-chevron-down text-xs text-gray-400"></i>
                            </summary>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="px-5 pb-5 pt-3">
                                    <form class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="FirstNameDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="FirstName" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="LastNameDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Name</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="LastName" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="EmailDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label><input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="Email" /></div>
                                        <div class="flex flex-col gap-1.5 sm:col-span-2"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide" data-rentmyattr="CountryLabel">Country</label><select class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition bg-white" data-rentmyattr="Country"><option value="">Select country</option></select></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="AddressLine1Div"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address Line 1</label><input type="text" placeholder="Enter a location" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="AddressLine1" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="AddressLine2Div"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address Line 2</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="AddressLine2" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="CityDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">City</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="City" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="StateDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">State</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="State" /></div>
                                        <div class="flex flex-col gap-1.5" data-rentmyattr="ZipCodeDiv"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Zipcode</label><input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" data-rentmyattr="Zipcode" /></div>
                                    </form>
                                </div>
                            </div>
                        </details>

                        <div class="flex justify-end mt-3">
                            <button class="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors" data-rentmyattr="GetDeliveryCost">
                                Get delivery cost <i class="rm rm-skip-forward text-xs"></i>
                            </button>
                        </div>

                        <div class="mt-3 overflow-hidden rounded-xl border border-gray-200" data-rentmyattr="DeliveryCostList">
                            <ul class="divide-y divide-gray-100 text-sm">
                                <li class="flex justify-between px-5 py-3 text-gray-600" data-rentmyattr="DeliveryCostChild"><span>Delivery</span><span>10</span></li>
                                <li class="flex justify-between px-5 py-3 font-semibold text-gray-900 bg-gray-50" data-rentmyattr="DeliveryCostTotal"><span>Total</span><span>20</span></li>
                            </ul>
                        </div>

                        <div class="text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 hidden" data-rentmyattr="DeliveryOutsideAreaMsg">
                            ⚠ Your address is outside of our delivery area. Please contact us to make other arrangements.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ═══════════════════════════════════════════ RIGHT ═══ -->
        <div class="w-full lg:w-[380px] flex-shrink-0">
            <div class="lg:sticky lg:top-6 space-y-5">

                <!-- Cart Order Summary -->
                <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden pb-20 lg:pb-0" data-rentmyattr="OrderSummary">
                    <div data-rentmyattr="Contents">
                        <div class="bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-4">
                            <h2 class="text-sm font-semibold tracking-widest text-white uppercase">Your Order Summary</h2>
                        </div>

                        <div class="p-6">
                            <!-- Date -->
                            <div class="text-xs text-gray-400 mb-4 flex items-center gap-1.5" data-rentmyattr="CheckoutDatetime">
                                <i class="rm rm-calendar"></i> <span>12/21/2023 - 12/21/2023</span>
                            </div>

                            <!-- Cart Items -->
                            <div class="space-y-3 mb-5" data-rentmyattr="CartItems">
                                <div class="flex gap-3" data-rentmyattr="Item">
                                    <div class="w-14 h-14 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                        <img src="" alt="product" class="w-full h-full object-cover" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-semibold text-gray-800 truncate" data-rentmyattr="ProductName">AA</p>
                                        <p class="text-xs text-gray-400" data-rentmyattr="ProductQuantity">qty: 1</p>
                                        <p class="text-xs text-gray-400" data-rentmyattr="ProductVaraint">test: 1</p>
                                        <p class="text-xs font-medium text-gray-700 mt-0.5" data-rentmyattr="ProductPrice">€0.00</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Divider -->
                            <div class="border-t border-dashed border-gray-200 my-4"></div>

                            <!-- Totals -->
                            <dl class="space-y-2 text-sm">
                                <div class="flex justify-between text-gray-600" data-rentmyattr="SubtotalLabel">
                                    <dt>Subtotal</dt><dd data-rentmyattr="Subtotal">$0.00</dd>
                                </div>
                                <div class="flex justify-between text-gray-600" data-rentmyattr="TaxesFeesLabel">
                                    <dt>Taxes &amp; Fees</dt><dd><span data-rentmyattr="TaxesFees">€0.00</span></dd>
                                </div>
                                <div class="flex justify-between text-gray-600" data-rentmyattr="OptionalServiceCheckoutRow">
                                    <dt>Optional Services</dt><dd data-rentmyattr="OptionalService">$0.00</dd>
                                </div>
                                <div class="flex justify-between text-gray-600" data-rentmyattr="DepositAmountCheckoutRow">
                                    <dt data-rentmyattr="DepositAmountLabel">Deposit Amount</dt><dd data-rentmyattr="DepositAmount">$0.00</dd>
                                </div>
                                <div class="flex justify-between text-gray-600" data-rentmyattr="TaxAmountLabel">
                                    <dt>Tax</dt><dd data-rentmyattr="TaxAmount">$0.00</dd>
                                </div>
                                <div class="flex justify-between text-gray-600">
                                    <dt data-rentmyattr="lbl_shipping">Shipping Charge</dt><dd data-rentmyattr="ShippingCharge">$0.00</dd>
                                </div>
                                <div class="flex justify-between text-gray-600">
                                    <dt data-rentmyattr="LblDeliveryTax">Delivery Tax</dt><dd data-rentmyattr="DeliveryTax">$0.00</dd>
                                </div>
                                <div class="flex justify-between text-gray-600">
                                    <dt data-rentmyattr="LblMultiDelivery">Drop off</dt>
                                    <dd data-rentmyattr="MultiDeliveryValue">$0.00</dd>
                                </div>
                                <div class="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900 text-base">
                                    <dt data-rentmyattr="LblTotal">Total</dt>
                                    <dd data-rentmyattr="TotalAmount">$0.00</dd>
                                </div>
                            </dl>

                            <!-- Optional Services -->
                            <div class="mt-5 border-t border-gray-100 pt-4" data-rentmyattr="AdditionalCharges">
                                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Optional Services</p>
                                <div class="space-y-3 mb-1" data-rentmyattr="SingleCharge">
                                    <div class="flex items-start justify-between gap-3">
                                        <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer" data-rentmyattr="Title">
                                            <input type="checkbox" class="w-4 h-4 accent-emerald-600 mt-0.5"> give donate
                                        </label>
                                        <div class="text-right" data-rentmyattr="FeeAmountsAndShowInputAmout">
                                            <div class="flex flex-wrap justify-end gap-1">
                                                <button type="button" class="text-xs border border-gray-300 rounded-md px-2.5 py-1 hover:bg-emerald-50 hover:border-emerald-400 transition-colors" data-rentmyattr="FeeAmounts">10%</button>
                                                <button type="button" class="text-xs border border-gray-300 rounded-md px-2.5 py-1 hover:bg-emerald-50 hover:border-emerald-400 transition-colors" data-rentmyattr="ShowInputAmount">Custom</button>
                                            </div>
                                            <select class="mt-1.5 text-xs border border-gray-300 rounded-md px-2 py-1 bg-white" data-rentmyattr="SelectOptions">
                                                <option>op, op2</option>
                                            </select>
                                            <div class="mt-2 flex gap-1" data-rentmyattr="InputAmountArea">
                                                <input class="flex-1 border border-gray-300 rounded-md text-xs px-2 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-500" type="text" data-rentmyattr="InputAmount" />
                                                <button type="button" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-2 transition-colors" data-rentmyattr="OkButton"><i class="rm rm-check"></i></button>
                                                <button type="button" class="text-xs bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md px-2 transition-colors" data-rentmyattr="CancelButton"><i class="rm rm-close"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- T&C + Extra Checkbox -->
                            <div class="mt-5 space-y-3 border-t border-gray-100 pt-4">
                                <div data-rentmyattr="CheckoutExtracCheckbox">
                                    <label class="flex items-start gap-2.5 text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" class="w-4 h-4 accent-emerald-600 mt-0.5">
                                        <div data-rentmyattr="TextArea"></div>
                                    </label>
                                </div>
                                <div data-rentmyattr="TermsConditions">
                                    <label data-rentmyattr="LabelClickShowPopup=true" class="flex items-start gap-2.5 text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" class="w-4 h-4 accent-emerald-600 mt-0.5">
                                        <span>I have read and agree with the
                                            <a class="text-emerald-600 font-semibold underline underline-offset-2 cursor-pointer" data-rentmyattr="ShowPopup">terms &amp; conditions</a>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <!-- Signature Pad -->
                            <div class="mt-5 rounded-xl border border-gray-200 overflow-hidden" data-rentmyattr="SingnatureArea">
                                <div class="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between">
                                    <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Signature</span>
                                    <div class="flex gap-3">
                                        <a class="text-xs text-emerald-600 font-medium hover:underline cursor-pointer" data-rentmyattr="Clear">Clear</a>
                                        <a class="text-xs text-emerald-600 font-medium hover:underline cursor-pointer" data-rentmyattr="Undo">Undo</a>
                                    </div>
                                </div>
                                <div class="bg-white p-3">
                                    <canvas class="w-full h-24 border border-dashed border-gray-300 rounded-lg bg-white"></canvas>
                                </div>
                            </div>

                            <!-- CTA -->
                            <div class="fixed lg:static bottom-0 left-0 right-0 z-30 mt-6 flex items-center gap-3 bg-white lg:bg-transparent border-t lg:border-t-0 border-gray-200 px-4 lg:px-0 py-3 lg:py-0">
                                <a class="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg px-4 py-2.5 transition-colors whitespace-nowrap" href="#" data-rentmyattr="BackToCartBtn">
                                    <i class="rm rm-arrow-left text-xs"></i>
                                    <span data-rentmyattr="BackToCartBtnLabel">Back to Cart</span>
                                </a>
                                <button type="button" class="flex-1 bg-[var(--brand-primary-dark)] hover:bg-[var(--brand-primary)] active:scale-95 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-all shadow-sm" data-rentmyattr="PlaceOrderBtn">
                                    <span data-rentmyattr="PlaceOrderBtnLabel">Proceed To Payment</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Wishlist Quote Summary -->
                <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden" data-rentmyattr="OrderWisthListSummary">
                    <div data-rentmyattr="WisthListContents">
                        <div class="bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-4">
                            <h2 class="text-sm font-semibold tracking-widest text-white uppercase">Your Quote Summary</h2>
                        </div>
                        <div class="p-6">
                            <div class="space-y-3 mb-5" data-rentmyattr="WisthListItems">
                                <div class="flex gap-3" data-rentmyattr="WisthListItem">
                                    <div class="w-14 h-14 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                        <img src="" alt="product" class="w-full h-full object-cover" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-semibold text-gray-800 truncate" data-rentmyattr="ProductName">AA</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <a class="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg px-4 py-2.5 transition-colors whitespace-nowrap" href="#" data-rentmyattr="BackToWishListBtn">
                                    <i class="rm rm-arrow-left text-xs"></i>
                                    <span data-rentmyattr="BackToWishListBtnLabel">Back to Wish List</span>
                                </a>
                                <button type="button" class="flex-1 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-all shadow-sm shadow-emerald-200" data-rentmyattr="PlaceQuoteOrderBtn">
                                    <span data-rentmyattr="PlaceOrderBtnLabel">Place Quote</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<script>
    // document.addEventListener("DOMContentLoaded", () => {
    //     RentMyEvent.add_filter(\'cdn:checkout:same_as_above\', (bool) => {
    //         console.log({bool});
    //         return false
    //     })
    // })
</script>
', "status" => 1],
            ["slug" => "order-complete", "name" => "Order Complete", "contents" => '<div class="RentMyOrderCompleteWrapper RentMyWrapper bg-[var(--brand-surface)] min-h-screen px-4 py-10" id="RentMyOrderCompleteWrapper">

  <!-- Thank you + action boxes -->
  <div Tabs class="max-w-screen-lg mx-auto flex flex-col gap-8">

    <div class="RentMyRow RentMyFullwidth MessageTitle text-center">
      <h1 class="text-3xl font-bold text-[var(--brand-text)]">Thank You <br>
        <span class="text-[var(--brand-primary)] text-2xl font-semibold">for your order</span>
      </h1>
    </div>

    <div class="RentMyRow OrderCompleteRow grid grid-cols-1 sm:grid-cols-3 gap-4">

      <div class="OrderCompleteBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm flex flex-col items-center gap-3 p-6 cursor-pointer hover:border-[var(--brand-primary)] hover:shadow-md transition-all" href="#" data-rentmyattr="PdfImageDiv">
        <div class="w-14 h-14 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center">
          <i class="rm rm-file-pdf text-3xl text-[var(--brand-primary)]"></i>
        </div>
        <img src="" alt="Download Receipt" data-rentmyattr="ImageDownloadPDF" class="hidden">
        <h3 class="text-sm font-semibold text-[var(--brand-text)]">Download Receipt</h3>
      </div>

      <div class="OrderCompleteBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm flex flex-col items-center gap-3 p-6 cursor-pointer hover:border-[var(--brand-primary)] hover:shadow-md transition-all" href="#" data-rentmyattr="CalendarImageDiv">
        <div class="w-14 h-14 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center">
          <i class="rm rm-calendar text-3xl text-[var(--brand-primary)]"></i>
        </div>
        <img src="" alt="Save to Calender" data-rentmyattr="ImageAddToCalendar" class="hidden">
        <h3 class="text-sm font-semibold text-[var(--brand-text)]">Add to calendar</h3>
      </div>

      <div class="OrderCompleteBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm flex flex-col items-center gap-3 p-6 cursor-pointer hover:border-[var(--brand-primary)] hover:shadow-md transition-all" href="#" data-rentmyattr="DetailsImageDiv">
        <div class="w-14 h-14 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center">
          <i class="rm rm-eye text-3xl text-[var(--brand-primary)]"></i>
        </div>
        <img src="" alt="View order details" data-rentmyattr="ImageViewDetails" class="hidden">
        <h3 class="text-sm font-semibold text-[var(--brand-text)]">View Details</h3>
      </div>

    </div>
  </div>

  <!-- Order summary -->
  <div class="RentMySummaryWrapper RentOrderSummary max-w-screen-lg mx-auto mt-8" data-rentmyattr="OrderSummary">
    <div class="container-fullwidth">
      <div class="RentMyRow flex flex-col lg:flex-row gap-6 items-start">

        <!-- Left: tables -->
        <div class="RentMyColumn8 flex-1 min-w-0 flex flex-col gap-6">

          <!-- Order items table -->
          <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-[var(--brand-border)]">
              <h3 class="OrderSummaryTitle text-sm font-bold text-[var(--brand-text)]">Order Summary</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="RentMyTable RentMyTableStriped RentMyCartTable RentMyCartSummeryTable w-full text-sm">
                <thead>
                  <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                    <th class="px-4 py-3 text-left font-semibold w-16"></th>
                    <th class="px-4 py-3 text-left font-semibold">Product</th>
                    <th class="px-4 py-3 text-left font-semibold">Unit Price</th>
                    <th class="px-4 py-3 text-left font-semibold">Quantity</th>
                    <th class="px-4 py-3 text-left font-semibold">Subtotal</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[var(--brand-border)]">
                  <tr data-rentmyattr="OrderItem" class="hover:bg-[var(--brand-surface)] transition-colors">
                    <td class="px-4 py-3" data-rentmyattr="ImageArea">
                      <img src="" class="cart product img w-12 h-12 rounded-lg object-cover border border-[var(--brand-border)]" alt="">
                    </td>
                    <td class="px-4 py-3 text-[var(--brand-text)] font-medium" data-rentmyattr="ItemNameArea">Product1</td>
                    <td class="px-4 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ItemPrice">$50.00</td>
                    <td class="px-4 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="Quantity">2</td>
                    <td class="px-4 py-3 text-[var(--brand-text)] font-medium" data-rentmyattr="ItemPriceArea">$255.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Optional services table -->
          <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="RentMyTable RentMyTableStriped RentMyOptionalService w-full text-sm" data-rentmyattr="OptionalService">
                <thead>
                  <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                    <th class="px-4 py-3 text-left font-semibold" colspan="2">Optional Services</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[var(--brand-border)]">
                  <tr data-rentmyattr="Service" class="hover:bg-[var(--brand-surface)] transition-colors">
                    <td class="px-4 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="Name">Description</td>
                    <td class="px-4 py-3 text-[var(--brand-text)] font-medium" data-rentmyattr="Price">$255.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <!-- Right: summary totals -->
        <div class="RentMyColumn4 w-full lg:w-72 flex-shrink-0">
          <div class="RentMyRow RentMyCartSummery">
            <div class="RentMyFullwidth RentMyCartSummeryInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-5 flex flex-col gap-3">

              <div class="flex items-center justify-between">
                <span class="RentMySummaryDateRange text-xs text-[var(--brand-text-muted)]" data-rentmyattr="RentalDate">11/22/2023 - 11/22/2023</span>
              </div>

              <h4 class="RentMyCartTotal text-sm font-bold text-[var(--brand-text)] border-b border-[var(--brand-border)] pb-3">Total</h4>

              <table class="RentMyTable RentMySummeryTable w-full text-sm" data-rentmyattr="SummaryTable">
                <tbody class="divide-y divide-[var(--brand-border)]">
                  <tr>
                    <td class="py-2 text-[var(--brand-text-muted)]" data-rentmyattr="SubtotalLabel">Subtotal</td>
                    <td class="py-2 text-right"><b class="text-[var(--brand-text)]" data-rentmyattr="SubtotalAmount">€0.00</b></td>
                  </tr>
                  <tr data-rentmyattr="TaxesFeesLabel">
                    <td class="py-2 text-[var(--brand-text-muted)]">Taxes & Fees</td>
                    <td class="py-2 text-right text-[var(--brand-text)]"><span data-rentmyattr="TaxesFees">€0.00</span></td>
                  </tr>
                  <tr data-rentmyattr="OptionalServicesLabel">
                    <td class="py-2 text-[var(--brand-text-muted)]">Optional Service</td>
                    <td class="py-2 text-right"><b class="text-[var(--brand-text)]" data-rentmyattr="OptionalServices">€0.00</b></td>
                  </tr>
                  <tr data-rentmyattr="DepositeAmountRow">
                    <td class="py-2 text-[var(--brand-text-muted)]" data-rentmyattr="DepositeAmountLabel">Deposit Amount</td>
                    <td class="py-2 text-right text-[var(--brand-text)]"><span data-rentmyattr="DepositeAmount">€0.00</span></td>
                  </tr>
                  <tr data-rentmyattr="TaxAmountRow">
                    <td class="py-2 text-[var(--brand-text-muted)]" data-rentmyattr="TaxName">Tax Amount</td>
                    <td class="py-2 text-right text-[var(--brand-text)]"><span data-rentmyattr="TaxAmount">€0.00</span></td>
                  </tr>
                  <tr data-rentmyattr="lbl_shipping_row">
                    <td class="py-2 text-[var(--brand-text-muted)]" data-rentmyattr="lbl_shipping">Shipping Charge</td>
                    <td class="py-2 text-right text-[var(--brand-text)]"><span data-rentmyattr="ShippingCharge">€0.00</span></td>
                  </tr>
                  <tr class="border-t-2 border-[var(--brand-border)]">
                    <td class="pt-3 pb-1"><h5 class="text-sm font-bold text-[var(--brand-text)]" data-rentmyattr="TotalLabel">Total</h5></td>
                    <td class="pt-3 pb-1 text-right"><h5 class="text-sm font-bold text-[var(--brand-primary)]"><span data-rentmyattr="TotalAmount">€0.00</span></h5></td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="AfterOrderPageFooter max-w-screen-lg mx-auto mt-6" data-rentmyattr="AfterOrderPageFooter"></div>

    <div class="OrderDetailsBack max-w-screen-lg mx-auto mt-4">
      <button class="inline-flex items-center gap-2 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2.5 transition-colors" data-rentmyattr="Back">
        <i class="rm rm-arrow-left text-base"></i> Back
      </button>
    </div>
  </div>

</div>
', "status" => 1],
            ["slug" => "order-details", "name" => "Order Details", "contents" => '<div id="RentMyCustomerOrderDetails" class="RentMyWrapper RentMyCustomerPortalWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="RentMyCustomPortalRow max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 items-start">

    <!-- Sidebar -->
    <div class="RentMyLeftSidebarmenu w-full md:w-56 flex-shrink-0">
      <div class="RentMyLeftSidebarmenuInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="SideBar">

        <div class="RentMyProfileImge flex flex-col items-center py-6 px-4 border-b border-[var(--brand-border)]">
          <img src="" alt="" data-rentmyattr="rentmy_customer_profile_image" class="w-16 h-16 rounded-full object-cover bg-[var(--brand-surface)] border-2 border-[var(--brand-border)]">
          <h5 class="RentMyProfileName mt-2 text-sm font-semibold text-[var(--brand-text)] text-center" data-rentmyattr="customer_name" customer_name="true">renmty suppoert</h5>
        </div>

        <nav class="RentMySideMenu py-2">
          <ul class="space-y-0.5 px-2">
            <li><a data-rentmyattr="RentMyPageLink=customer_profile" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Profile</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_password" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Password</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_avatar" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Avatar</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_order_history" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Order History</a></li>
            <li data-rentmyattr="DashboardNav" hidden=""><a rentmypagelink="customer_order_dashboard" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Dashboard</a></li>
            <li data-rentmyattr="BillingNav" hidden=""><a rentmypagelink="customer_billing" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer" href="http://teststore03.rentmy.test/customer-billing">Billing</a></li>
            <li class="pt-1 border-t border-[var(--brand-border)] mt-1">
              <a class="rentmy_logout_btn flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors cursor-pointer Show" ebounted="true">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="RentMyRightContent flex-1 min-w-0 flex flex-col gap-6">

      <!-- Notice Bar -->
      <div data-rentmyattr="NoticeBar" class="rounded-xl px-5 py-3 flex items-center justify-between text-white">
        <div class="flex items-center gap-2">
          <i data-rentmyattr="NoticeBarIcon" class="rm rm-check-circle text-lg"></i>
          <span data-rentmyattr="NoticeBarMessage" class="text-sm font-medium"></span>
        </div>
        <button data-rentmyattr="NoticeBarClose" type="button" class="cursor-pointer text-white/80 hover:text-white ml-4 flex-shrink-0 bg-transparent border-0">
          <i class="rm rm-close text-sm"></i>
        </button>
      </div>

      <!-- Page header -->
      <div class="RentMyPageHeader bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm px-5 py-4 flex items-center justify-between">
        <h3 class="text-base font-bold text-[var(--brand-text)]">Order Details: #<span data-rentmyattr="order_id" order_id="true">134505</span></h3>
        <div class="RentMyPageHeaderRightSide">
          <a href="#" class="RentMyBtn RentMyStatusBtn inline-flex items-center px-3 py-1 text-xs font-semibold rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] border border-[var(--brand-primary)]" data-rentmyattr="order_status" order_status="true">Order prep</a>
        </div>
      </div>

      <!-- Summary + Billing row -->
      <div class="RentMyRow SummeryBillingDetails grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- Summary card -->
        <div class="RentMyHalfwidth RentMyCard bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">
          <div class="RentMyCardHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
            <h3 class="text-sm font-bold text-[var(--brand-text)]">Summary</h3>
            <div class="RentMyCardRightSide cp"></div>
          </div>
          <div class="RentMyCardBody p-5">
            <div class="RentMyRow grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="RentMyHalfwidth space-y-2">
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Order ID:</strong> <span data-rentmyattr="order_id" order_id="true">134505</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Quantity:</strong> <span data-rentmyattr="order_quantity" order_quantity="true">1</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Payment Status:</strong> <span data-rentmyattr="order_payment_status" order_payment_status="true">Paid</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Status:</strong> <span data-rentmyattr="order_status" order_status="true">Order prep</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Order Date &amp; Time:</strong> <span data-rentmyattr="order_date_time" order_date_time="true">05-11-2026 06:37 PM</span></p>
              </div>
              <div class="RentMyHalfwidth space-y-2">
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Subtotal:</strong> <span data-rentmyattr="order_subtotal" order_subtotal="true">$300.00</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Delivery Charge:</strong> <span data-rentmyattr="order_delivery_charge_total" order_delivery_charge_total="true">$0.00</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Total Discount:</strong> <span data-rentmyattr="order_total_discount" order_total_discount="true">$0.00</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Sales Tax:</strong> <span data-rentmyattr="order_sales_tax" order_sales_tax="true">$24.75</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">DE (8%):</strong> <span data-rentmyattr="order_de" order_de="true"></span></p>
                <p class="RentMyDestitle text-sm font-semibold text-[var(--brand-text)]"><strong>Grand Total:</strong> <span data-rentmyattr="order_grand_total" order_grand_total="true">$390.75</span></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Billing & Shipping card -->
        <div class="RentMyHalfwidth RentMyCard bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">
          <div class="RentMyCardHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
            <h3 class="text-sm font-bold text-[var(--brand-text)]">Billing &amp; Shipping Details</h3>
            <div class="RentMyCardRightSide cp">
              <button data-rentmyattr="EditAddress" type="button" class="inline-flex items-center justify-center w-7 h-7 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                <i class="rm rm-edit text-base"></i>
              </button>
            </div>
          </div>
          <div class="RentMyCardBody p-5 space-y-5">
            <div class="RentMyRow grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="RentMyHalfwidth space-y-2">
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Name:</strong> <span data-rentmyattr="billing_name" billing_name="true">RENTMY JHON DOE</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Mobile:</strong> <span data-rentmyattr="billing_mobile" billing_mobile="true">13474403012</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Address Line 1:</strong> <span data-rentmyattr="billing_address_line_1" billing_address_line_1="true">1400 Lubbock St</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">City:</strong> <span data-rentmyattr="billing_city" billing_city="true">Houston</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">State:</strong> <span data-rentmyattr="billing_state" billing_state="true">TX</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Company:</strong> <span data-rentmyattr="billing_company" billing_company="true"></span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Address Info:</strong> <span data-rentmyattr="billing_address_info" billing_address_info="true"></span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Signature:</strong> <span data-rentmyattr="signature" signature="true"><img class="mt-3 border max-w-full h-auto" src="https://s3.us-east-2.amazonaws.com/pimg.rentmy.co/orders/signature_134505.png"></span></p>
              </div>
              <div class="RentMyHalfwidth space-y-2">
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Email:</strong> <span data-rentmyattr="billing_email" billing_email="true">rentmy@rentmy.co</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Country:</strong> <span data-rentmyattr="billing_country" billing_country="true">US</span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Address Line 2:</strong> <span data-rentmyattr="billing_address_line_2" billing_address_line_2="true"></span></p>
                <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Zipcode:</strong> <span data-rentmyattr="billing_zip" billing_zip="true">77002</span></p>
              </div>
            </div>

            <div class="RentMyRow" data-rentmyattr="AdditionalInfoSection">
              <h5 class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2">Additional Info</h5>
              <div data-rentmyattr="AdditionalFields" class="space-y-1"></div>
            </div>

            <div class="RentMyRow" data-rentmyattr="ShippingInfoSection">
              <h5 data-rentmyattr="ShippingInfoSectionLabel" class="text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide mb-2" hidden="">Shipping Info</h5>
              <div data-rentmyattr="ShippingInfoSectionContent" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Name on Card:</strong> <span data-rentmyattr="shipping_name"></span></p>
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Email:</strong> <span data-rentmyattr="shipping_email"></span></p>
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Address Line 1:</strong> <span data-rentmyattr="shipping_address1"></span></p>
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">City:</strong> <span data-rentmyattr="shipping_city"></span></p>
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Zipcode:</strong> <span data-rentmyattr="shipping_zipcode"></span></p>
                </div>
                <div class="space-y-2">
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Phone:</strong> <span data-rentmyattr="shipping_mobile"></span></p>
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Address Line 2:</strong> <span data-rentmyattr="shipping_address2"></span></p>
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">State:</strong> <span data-rentmyattr="shipping_state"></span></p>
                  <p class="RentMyDestitle text-sm text-[var(--brand-text-muted)]"><strong class="text-[var(--brand-text)]">Country:</strong> <span data-rentmyattr="shipping_country"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Inventory Items -->
      <div class="RentMyCard InventoryRentMyCard bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">
        <div class="RentMyCardHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
          <h3 class="text-sm font-bold text-[var(--brand-text)]">Inventory Items</h3>
          <div class="RentMyCardRightSide">
            <button data-rentmyattr="RentMyAddInventoryItemBtn" class="RentMyBtn RentMyAddItem inline-flex items-center gap-1.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-xs font-semibold rounded-xl px-3 py-1.5 transition-colors">
              <i class="rm rm-plus text-sm"></i> Add Item
            </button>
          </div>
        </div>
        <div class="RentMyCardBody p-5 space-y-3">
          <div data-rentmyattr="rentmy-add-inventory-search" class="mb-4">
            <div data-rentmyattr="ProductSearchWrapper" class="flex items-center border border-[var(--brand-border)] rounded-lg bg-[var(--brand-surface)] focus-within:ring-2 focus-within:ring-[var(--brand-primary-light)] focus-within:border-[var(--brand-primary)] focus-within:bg-white transition">
              <input data-rentmyattr="ProductSearchInput" type="text" class="RentMyInputField flex-1 min-w-0 border-0 bg-transparent px-3 py-2.5 text-sm text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-0" placeholder="Search Item" autocomplete="off" autocapitalize="off">
            </div>
            <div data-rentmyattr="ProductSearchResults" class="bg-white border border-[var(--brand-border)] rounded-xl shadow-xl mt-1 overflow-hidden">
              <ul data-rentmyattr="ProductSearchList" class="divide-y divide-[var(--brand-border)] max-h-72 overflow-y-auto"></ul>
            </div>
          </div>
          <div data-rentmyattr="rentmy-order-product-details">
            <div data-rentmyattr="ProductDetailsPanel" class="bg-[var(--brand-surface)] border border-[var(--brand-border)] rounded-2xl p-5 flex flex-col sm:flex-row gap-5">

              <!-- Product image -->
              <div class="flex-shrink-0 w-full sm:w-36">
                <img data-rentmyattr="ProductImage" src="" alt="Product Image" class="w-full h-36 object-cover rounded-xl border border-[var(--brand-border)] bg-white">
              </div>

              <!-- Product info -->
              <div class="flex-1 flex flex-col gap-3">

                <h4 data-rentmyattr="ProductName" class="text-sm font-bold text-[var(--brand-text)]"></h4>

                <!-- Package items -->
                <div data-rentmyattr="PackageSection" class="space-y-1">
                  <p class="text-xs font-semibold text-[var(--brand-text-muted)] uppercase tracking-wide">Package Includes</p>
                  <ul data-rentmyattr="PackageList" class="space-y-0.5 text-sm text-[var(--brand-text)]"></ul>
                </div>

                <!-- Variant chain -->
                <div data-rentmyattr="VariantChainSection" class="space-y-1">
                  <ul data-rentmyattr="VariantChainList" class="space-y-1 text-sm text-[var(--brand-text)]"></ul>
                </div>

                <!-- Rent prices -->
                <div data-rentmyattr="PricesSection" class="space-y-1">
                  <p class="text-xs font-semibold text-[var(--brand-text-muted)] uppercase tracking-wide">Select Duration</p>
                  <div data-rentmyattr="PricesList" class="flex flex-wrap gap-2"></div>
                </div>

                <!-- Quantity + price -->
                <div class="flex flex-wrap items-center gap-4">
                  <div class="flex items-center">
                    <button data-rentmyattr="QtyDecrease" type="button" class="w-8 h-8 flex items-center justify-center bg-[var(--brand-text)] text-white rounded-l-lg text-base font-bold hover:opacity-80 transition">−</button>
                    <input data-rentmyattr="QtyInput" type="text" value="1" disabled class="w-10 h-8 text-center text-sm border-y border-[var(--brand-border)] bg-white text-[var(--brand-text)]">
                    <button data-rentmyattr="QtyIncrease" type="button" class="w-8 h-8 flex items-center justify-center bg-[var(--brand-text)] text-white rounded-r-lg text-base font-bold hover:opacity-80 transition">+</button>
                  </div>
                  <p data-rentmyattr="PriceDisplay" class="text-sm font-semibold text-[var(--brand-text)]"></p>
                </div>

                <!-- Actions -->
                <div class="flex gap-3 pt-1">
                  <button data-rentmyattr="AddItemBtn" type="button" class="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2 transition-colors">Add Item</button>
                  <button data-rentmyattr="CancelItemBtn" type="button" class="border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2 transition-colors">Cancel</button>
                </div>

              </div>
            </div>
          </div>
          <div data-rentmyattr="rentmy-order-date-time" class="text-sm text-[var(--brand-text-muted)]">
            <strong class="text-[var(--brand-text)]">Rental Dates:</strong> <span>22 Mar 2024 - 24 Mar 2024</span>
          </div>
          <div data-rentmyattr="RentMyOrderInventory" class="overflow-x-auto">
            <table class="RentMyTable RentMyTableStriped w-full text-sm">
              <thead>
                <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                  <th class="px-4 py-3 text-left font-semibold w-[10%]">Image</th>
                  <th class="px-4 py-3 text-left font-semibold w-[25%]">Description</th>
                  <th class="px-4 py-3 text-left font-semibold w-[15%]">Price</th>
                  <th class="px-4 py-3 text-left font-semibold w-[20%]">Quantity</th>
                  <th class="px-4 py-3 text-left font-semibold w-[10%]">Subtotal</th>
                  <th class="px-4 py-3 text-left font-semibold w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--brand-border)]">
                
              <tr>
                  <td class="px-4 py-3 align-middle" data-rentmyattr="product_images"></td>
                  <td class="px-4 py-3 text-[var(--brand-text)]" data-rentmyattr="product_discription"></td>
                  <td class="px-4 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="subtotal"></td>
                  <td class="px-4 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="quantity_functions"></td>
                  <td class="px-4 py-3 text-[var(--brand-text)]" data-rentmyattr="price"></td>
                  <td class="px-4 py-3"><a class="TextDanger text-[var(--brand-danger)] cursor-pointer"><i class="rm rm-trash text-base"></i></a></td>
              </tr></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Work Order Items -->
      <div class="RentMyCard InventoryRentMyCard bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="work_order_table" hidden="">
        <div class="RentMyCardHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
          <h3 class="text-sm font-bold text-[var(--brand-text)]">Additional Items &amp; Pick up Request</h3>
          <div class="RentMyCardRightSide">
            <span class="RentMyBadge inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[var(--brand-surface)] border border-[var(--brand-border)] text-[var(--brand-text-muted)]" data-rentmyattr="work_order_badge">Pending</span>
          </div>
        </div>
        <div class="RentMyCardBody p-5 space-y-3">
          <div data-rentmyattr="rentmy-add-inventory-search" class="mb-4">
            <div data-rentmyattr="ProductSearchWrapper" class="flex items-center border border-[var(--brand-border)] rounded-lg bg-[var(--brand-surface)] focus-within:ring-2 focus-within:ring-[var(--brand-primary-light)] focus-within:border-[var(--brand-primary)] focus-within:bg-white transition">
              <input data-rentmyattr="ProductSearchInput" type="text" class="RentMyInputField flex-1 min-w-0 border-0 bg-transparent px-3 py-2.5 text-sm text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-0" placeholder="Search Item" autocomplete="off" autocapitalize="off">
            </div>
            <div data-rentmyattr="ProductSearchResults" class="bg-white border border-[var(--brand-border)] rounded-xl shadow-xl mt-1 overflow-hidden">
              <ul data-rentmyattr="ProductSearchList" class="divide-y divide-[var(--brand-border)] max-h-72 overflow-y-auto"></ul>
            </div>
          </div>
          <div data-rentmyattr="rentmy-order-product-details"></div>
          <div data-rentmyattr="RentMyWorkOrder" class="overflow-x-auto">
            <table class="RentMyTable RentMyTableStriped w-full text-sm">
              <thead>
                <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                  <th class="px-4 py-3 text-left font-semibold w-[10%]">Image</th>
                  <th class="px-4 py-3 text-left font-semibold w-[10%]">Type</th>
                  <th class="px-4 py-3 text-left font-semibold w-[25%]">Description</th>
                  <th class="px-4 py-3 text-left font-semibold w-[15%]">Price</th>
                  <th class="px-4 py-3 text-left font-semibold w-[20%]">Quantity</th>
                  <th class="px-4 py-3 text-left font-semibold w-[10%]">Subtotal</th>
                  <th class="px-4 py-3 text-left font-semibold w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--brand-border)]">
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Payments -->
      <div class="RentMyCard PaymentsRentMyCard bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">
        <div class="RentMyCardHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
          <h3 class="text-sm font-bold text-[var(--brand-text)]">Payments</h3>
          <div class="RentMyCardRightSide">
            <button data-rentmyattr="RentMyAddPaymentBtn" class="RentMyBtn RentMyAddPaymentBtn inline-flex items-center gap-1.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-xs font-semibold rounded-xl px-3 py-1.5 transition-colors">
              <i class="rm rm-plus text-sm"></i> Add Payment
            </button>
          </div>
        </div>
        <div class="RentMyCardBody p-5 space-y-4">
          <div class="RentMyPaymentOption grid grid-cols-3 gap-4">
            <div class="bg-[var(--brand-surface)] rounded-xl border border-[var(--brand-border)] px-4 py-3">
              <p class="text-xs text-[var(--brand-text-muted)] mb-1">Total Amount</p>
              <p class="text-base font-bold text-[var(--brand-text)]" data-rentmyattr="total_payment_amount">$390.75</p>
            </div>
            <div class="bg-[var(--brand-surface)] rounded-xl border border-[var(--brand-border)] px-4 py-3">
              <p class="text-xs text-[var(--brand-text-muted)] mb-1">Total Paid</p>
              <p class="text-base font-bold text-[var(--brand-primary)]" data-rentmyattr="total_paid_amount">$390.75</p>
            </div>
            <div class="bg-[var(--brand-surface)] rounded-xl border border-[var(--brand-border)] px-4 py-3">
              <p class="text-xs text-[var(--brand-text-muted)] mb-1">Due Amount</p>
              <p class="text-base font-bold text-[var(--brand-danger)]" data-rentmyattr="total_due_amount" total_due_amount="true">$0.00</p>
            </div>
          </div>
          <div data-rentmyattr="RentMyOrderPayment" class="overflow-x-auto">
            <table class="RentMyTable RentMyTableStriped w-full text-sm">
              <thead>
                <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                  <th class="px-4 py-3 text-left font-semibold w-[30%]">Payment Type</th>
                  <th class="px-4 py-3 text-left font-semibold w-[15%]">Status</th>
                  <th class="px-4 py-3 text-left font-semibold w-[15%]">Paid Amount</th>
                  <th class="px-4 py-3 text-left font-semibold w-[40%]">Note</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--brand-border)]">
              <tr><td class="px-4 py-3 text-[var(--brand-text)]" data-rentmyattr="content_method"><div class="payment-pragraph"><p>In-store – Card entry</p></div></td><td class="px-4 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="status"><div class="payment-pragraph"><p>Paid</p></div></td><td class="px-4 py-3 text-[var(--brand-text)]" data-rentmyattr="payment_amount"><div class="payment-pragraph"><p>$390.75</p></div></td><td class="px-4 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="note"><div class="payment-pragraph"><p></p></div></td></tr></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Notes -->
      <div class="RentMyCard NotesRentMyCard bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">
        <div class="RentMyCardHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
          <h3 class="text-sm font-bold text-[var(--brand-text)]">Notes</h3>
          <div class="RentMyCardRightSide">
            <button data-rentmyattr="RentMyNoteAddBtn" type="button" class="RentMyBtn RentMyAddNoteBtn inline-flex items-center gap-1.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-xs font-semibold rounded-xl px-3 py-1.5 transition-colors">
              <i class="rm rm-plus text-sm"></i> Add Note
            </button>
          </div>
        </div>
        <div class="RentMyCardBody p-5 space-y-4">
          <form data-rentmyattr="RentMyNoteAddForm" class="space-y-3">
            <div class="RentMyInputGroup flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Note</label>
              <textarea rows="4" data-rentmyattr="RentMyNote" name="note" placeholder="Enter note" autocomplete="off" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition resize-none"></textarea>
            </div>
            <div class="RentMyInputGroup">
              <div class="RentMyCustomFile flex items-center gap-3 border border-dashed border-[var(--brand-border)] hover:border-[var(--brand-primary)] rounded-xl px-4 py-3 cursor-pointer transition-colors group relative">
                <span class="inline-flex items-center gap-1.5 bg-[var(--brand-surface)] group-hover:bg-[var(--brand-primary-light)] border border-[var(--brand-border)] group-hover:border-[var(--brand-primary)] text-[var(--brand-text-muted)] group-hover:text-[var(--brand-primary)] text-sm font-medium rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap">
                  <i class="rm rm-plus text-sm"></i> Choose file
                </span>
                <label class="RentMyCustomFileLabel text-sm text-[var(--brand-text-muted)] truncate cursor-pointer">No file chosen…</label>
                <input type="file" data-rentmyattr="RentMyFile" name="file" class="RentMyCustomFileInput absolute inset-0 opacity-0 cursor-pointer w-full h-full">
              </div>
            </div>
            <div class="RentMyButtonGroup RentMyNotBetween flex gap-3">
              <button data-rentmyattr="RentMyNoteSubmitBtn" type="button" class="RentMyBtn RentMyNoteBtn bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors">Submit</button>
              <button data-rentmyattr="RentMyNoteCancelBtn" type="button" class="RentMyBtn RentMyNoteCancelBtn border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2.5 transition-colors">Cancel</button>
            </div>
          </form>
          <div data-rentmyattr="RentMyOrderNotes" class="overflow-x-auto">
            <table class="RentMyTable RentMyTableStriped w-full text-sm">
              <thead>
                <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                  <th class="px-4 py-3 text-left font-semibold w-[90%]">Note</th>
                  <th class="px-4 py-3 text-left font-semibold w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--brand-border)]">
                <tr>
                  <td class="px-4 py-3 align-top" data-rentmyattr="note"></td>
                  <td class="px-4 py-3 align-top w-10"><a class="TextDanger text-[var(--brand-danger)] cursor-pointer"><i class="rm rm-trash text-base"></i></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Address Edit Modal -->
  <div data-rentmyattr="AddressEditModalOverlay" class="fixed inset-0 bg-black/50 z-[999] flex items-end sm:items-start justify-center sm:py-8 sm:px-4 sm:overflow-y-auto">
    <div data-rentmyattr="AddressEditModalInner" class="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col h-[90vh] sm:h-auto sm:max-h-[90vh]">
      <div class="flex items-center justify-between px-6 py-4 border-b border-[var(--brand-border)] flex-shrink-0">
        <h3 class="text-base font-bold text-[var(--brand-text)]">Customer Information</h3>
        <button data-rentmyattr="AddressModalClose" type="button" class="inline-flex items-center justify-center w-7 h-7 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors bg-transparent border-0">
          <i class="rm rm-close text-sm"></i>
        </button>
      </div>
      <div class="p-6 space-y-6 overflow-y-auto flex-1">

        <!-- Billing Address -->
        <div>
          <h4 class="text-sm font-bold text-[var(--brand-text)] mb-4">Billing Address</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">First Name</label>
              <input data-rentmyattr="addr_first_name" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Last Name</label>
              <input data-rentmyattr="addr_last_name" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Mobile</label>
              <input data-rentmyattr="addr_mobile" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Email</label>
              <input data-rentmyattr="addr_email" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Company</label>
              <input data-rentmyattr="addr_company" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Country</label>
              <select data-rentmyattr="addr_country" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition"></select>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Address Line 1</label>
              <input data-rentmyattr="addr_address1" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Address Line 2</label>
              <input data-rentmyattr="addr_address2" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">City</label>
              <input data-rentmyattr="addr_city" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Zipcode</label>
              <input data-rentmyattr="addr_zipcode" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">State</label>
              <input data-rentmyattr="addr_state" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
          </div>
        </div>

        <!-- Shipping Address -->
        <div class="border-t border-[var(--brand-border)] pt-6">
          <h4 class="text-sm font-bold text-[var(--brand-text)] mb-4">Shipping Address</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">First Name</label>
              <input data-rentmyattr="addr_ship_first_name" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Last Name</label>
              <input data-rentmyattr="addr_ship_last_name" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Mobile</label>
              <input data-rentmyattr="addr_ship_mobile" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Email</label>
              <input data-rentmyattr="addr_ship_email" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Country</label>
              <select data-rentmyattr="addr_ship_country" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition"></select>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Address Line 1</label>
              <input data-rentmyattr="addr_ship_address1" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Address Line 2</label>
              <input data-rentmyattr="addr_ship_address2" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">City</label>
              <input data-rentmyattr="addr_ship_city" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">Zipcode</label>
              <input data-rentmyattr="addr_ship_zipcode" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-[var(--brand-text-muted)]">State</label>
              <input data-rentmyattr="addr_ship_state" type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition">
            </div>
          </div>
        </div>

      </div>

      <!-- Sticky footer -->
      <div class="flex justify-end px-6 py-4 border-t border-[var(--brand-border)] bg-white flex-shrink-0">
        <button data-rentmyattr="AddressUpdateBtn" type="button" class="RentMyBtn RentMySubmitBtn inline-flex items-center gap-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-6 py-2.5 transition-colors">
          Update
        </button>
      </div>
    </div>
  </div>

</div>', "status" => 1],
            ["slug" => "wish-list", "name" => "Wish List", "contents" => '<div class="RentMyWishlistPage RentMyWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">

  <div class="container-fullwidth max-w-screen-xl mx-auto" data-rentmyattr="InsideContainer">

    <div class="RentMyAddonProducts" data-rentmyattr="RentMyRelatedProducts">

      <!-- Title bar -->
      <div class="WishlistCopyarea mb-6">
        <div class="WishlistTitleBar flex items-center justify-between gap-4">
          <h3 class="WishlistSubTitle text-xl font-bold text-[var(--brand-text)]">Wish List</h3>

          <!-- Desktop action buttons -->
          <div class="WishlistTitleRightArea WishlistDesktopBtnArea hidden sm:flex items-center gap-2">
            <button type="button" class="WishlistSaveBtn relative group inline-flex items-center gap-1.5 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm rounded-lg px-3 py-2 transition-colors" data-rentmyattr="WishlistSaveBtn">
              <i class="rm rm-save"></i>
              <span>Save list</span>
              <span class="tooltip__text tooltip__text--top">Save wish list</span>
            </button>
            <button type="button" class="WishlistCopyBtn relative group inline-flex items-center gap-1.5 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm rounded-lg px-3 py-2 transition-colors" data-rentmyattr="WishlistCopyBtn">
              <i class="rm rm-link"></i>
              <span>Copy link</span>
              <span class="tooltip__text tooltip__text--top">Copy wish list link</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Product grid -->
      <div class="RentMyWishlistBody">
        <div class="RentMyRow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          <!-- Single item (widget repeats this) -->
          <div class="WishlistItemColumn" data-rentmyattr="WishlistItem">
            <div class="WishlistProductItem group bg-white rounded-xl border border-[var(--brand-border)] overflow-hidden shadow-sm hover:shadow-md transition-shadow">

              <!-- Image -->
              <div class="WishlistImg relative overflow-hidden aspect-square">
                <a data-rentmyattr="ProductPageFullUrl" class="SingleItemImg block w-full h-full" href="/products/black-fernanda">
                  <img class="img-fluid transition w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Wish list item" src="https://s3.us-east-2.amazonaws.com/images.rentmy.co/products/3787/217312/5b12v7b_1746325243_i14v71s.png" />
                </a>

                <!-- Overlay -->
                <div class="WishlistOverlow transition absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <div class="OverlowButton flex items-center gap-2">
                    <button class="WishlistDeleteBtn w-8 h-8 rounded-full bg-white/90 hover:bg-[var(--brand-danger)] hover:text-white text-[var(--brand-text)] flex items-center justify-center transition-colors" data-rentmyattr="WishlistDeleteBtn">
                      <i class="rm rm-trash"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Name -->
              <div class="WishlistBody wishlist-body px-3 py-2.5">
                <a data-rentmyattr="ProductFullUrl" href="#">
                  <h3 class="WishlistProductName text-sm font-medium text-[var(--brand-text)] hover:text-[var(--brand-primary)] transition-colors line-clamp-2" data-rentmyattr="WishlistProductName">Black Fernanda</h3>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Bottom actions -->
      <div class="WishlistButtonArea mt-8 flex flex-col sm:flex-row items-center gap-3">
        <button class="WishlistContinueBtn w-full sm:w-auto border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-6 py-2.5 transition-colors" data-rentmyattr="BtnContinueShipping">
          Continue Shopping
        </button>
        <button class="WishlistQuoteBtn w-full sm:w-auto bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-6 py-2.5 transition-colors" data-rentmyattr="BtnMakeQuote">
          Make Quote
        </button>

        <!-- Mobile save/copy buttons -->
        <div class="WishlistTitleRightArea WishlistMobileBtnArea flex sm:hidden items-center gap-2 ml-auto">
          <button type="button" class="WishlistSaveBtn relative group inline-flex items-center gap-1.5 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm rounded-lg px-3 py-2 transition-colors" data-rentmyattr="WishlistSaveBtn">
            <i class="rm rm-save"></i>
            <span class="tooltip__text tooltip__text--top">Save wish list</span>
          </button>
          <button type="button" class="WishlistCopyBtn relative group inline-flex items-center gap-1.5 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm rounded-lg px-3 py-2 transition-colors" data-rentmyattr="WishlistCopyBtn">
            <i class="rm rm-link"></i>
            <span class="tooltip__text tooltip__text--top">Copy wish list link</span>
          </button>
        </div>
      </div>

    </div>
  </div>

</div>
', "status" => 1],
            ["slug" => "membership-plan", "name" => "Membership Plan", "contents" => '', "status" => 1],
            ["slug" => "rentmy-dashboard", "name" => "RentMy Dashboard", "contents" => '<div id="RentMyCustomerDashboardContainer" class="RentMyWrapper RentMyCustomerPortalWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="RentMyCustomPortalRow max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 items-start">

    <!-- Sidebar -->
    <div class="RentMyLeftSidebarmenu w-full md:w-56 flex-shrink-0">
      <div class="RentMyLeftSidebarmenuInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="SideBar">

        <div class="RentMyProfileImge flex flex-col items-center py-6 px-4 border-b border-[var(--brand-border)]">
          <img src="" alt="" data-rentmyattr="ProfileImage" class="w-16 h-16 rounded-full object-cover bg-[var(--brand-surface)] border-2 border-[var(--brand-border)]">
          <h5 class="RentMyProfileName mt-2 text-sm font-semibold text-[var(--brand-text)] text-center" data-rentmyattr="customer_name">{{ customer_name }}</h5>
        </div>

        <nav class="RentMySideMenu py-2">
          <ul class="space-y-0.5 px-2">
            <li><a data-rentmyattr="RentMyPageLink=customer_profile" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Profile</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_password" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Password</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_avatar" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Avatar</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_order_history" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Order History</a></li>
            <li data-rentmyattr="DashboardNav"><a data-rentmyattr="RentMyPageLink=customer_order_dashboard" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Dashboard</a></li>
            <li data-rentmyattr="BillingNav"><a data-rentmyattr="RentMyPageLink=customer_billing" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Billing</a></li>
            <li class="pt-1 border-t border-[var(--brand-border)] mt-1">
              <a class="rentmy_logout_btn flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors cursor-pointer">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="RentMyRightContent flex-1 min-w-0 flex flex-col gap-6">

      <!-- Stat cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <!-- Return Items -->
        <div class="RentMyCardBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-4" data-rentmyattr="ReturnItemBox">
          <div class="flex items-center gap-3 mb-3">
            <div class="RentMyCardIcon w-10 h-10 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center flex-shrink-0">
              <i class="rm rm-bag text-xl text-[var(--brand-primary)]"></i>
            </div>
            <span class="RentMyCardTitle text-xs font-medium text-[var(--brand-text-muted)]">Return Items</span>
          </div>
          <div class="RentMyCardValue text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="ReturnItemNumber">3</div>
        </div>

        <!-- Current Invoice -->
        <div class="RentMyCardBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-4" data-rentmyattr="CurrentInvoiceBox">
          <div class="flex items-center gap-3 mb-3">
            <div class="RentMyCardIcon w-10 h-10 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center flex-shrink-0">
              <i class="rm rm-file-pdf text-xl text-[var(--brand-primary)]"></i>
            </div>
            <span class="RentMyCardTitle text-xs font-medium text-[var(--brand-text-muted)]">Current Invoice</span>
          </div>
          <div class="RentMyCardValue text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="CurrentInvoiceTotal">$557</div>
        </div>

        <!-- New Items -->
        <div class="RentMyCardBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-4" data-rentmyattr="NewItemBox">
          <div class="flex items-center gap-3 mb-3">
            <div class="RentMyCardIcon w-10 h-10 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center flex-shrink-0">
              <i class="rm rm-plus text-xl text-[var(--brand-primary)]"></i>
            </div>
            <span class="RentMyCardTitle text-xs font-medium text-[var(--brand-text-muted)]">New Items</span>
          </div>
          <div class="RentMyCardValue text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="NewItemsNumber">1</div>
        </div>

        <!-- Next Invoice -->
        <div class="RentMyCardBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-4" data-rentmyattr="NextInvoiceBox">
          <div class="flex items-center gap-3 mb-3">
            <div class="RentMyCardIcon w-10 h-10 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center flex-shrink-0">
              <i class="rm rm-send text-xl text-[var(--brand-primary)]"></i>
            </div>
            <span class="RentMyCardTitle text-xs font-medium text-[var(--brand-text-muted)]">Next Invoice</span>
          </div>
          <div class="RentMyCardValue text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="NextInvoiceTotal">$828</div>
        </div>

      </div>

      <!-- Return Items Table -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="ReturnItemTable">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h6 class="RentSubTitle text-sm font-bold text-[var(--brand-text)]">Return Items</h6>
        </div>
        <div class="overflow-x-auto">
          <table class="RentMyTable w-full text-sm">
            <thead>
              <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                <th class="px-5 py-3 text-left font-semibold">Request Date</th>
                <th class="px-5 py-3 text-left font-semibold">Request Type</th>
                <th class="px-5 py-3 text-left font-semibold">Item Name</th>
                <th class="px-5 py-3 text-left font-semibold">Quantity</th>
                <th class="px-5 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--brand-border)]">
              <tr data-rentmyattr="ReturnItemTableRow" class="hover:bg-[var(--brand-surface)] transition-colors">
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="ReturnItemTableOrderId"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableRequestDate"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableRequestType"></td>
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="ReturnItemTableItemName"><span data-rentmyattr="name"></span></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableQuantity"></td>
                <td class="px-5 py-3">
                  <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                    <i class="rm rm-eye text-base"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Current Invoice Table -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="CurrentInvoiceTable">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h6 class="RentSubTitle text-sm font-bold text-[var(--brand-text)]">Current Invoice</h6>
        </div>
        <div class="overflow-x-auto">
          <table class="RentMyTable w-full text-sm">
            <thead>
              <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                <th class="px-5 py-3 text-left font-semibold">Order Date</th>
                <th class="px-5 py-3 text-left font-semibold">Amount</th>
                <th class="px-5 py-3 text-left font-semibold">Status</th>
                <th class="px-5 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--brand-border)]">
              <tr data-rentmyattr="CurrentInvoiceTableRow" class="hover:bg-[var(--brand-surface)] transition-colors">
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="CurrentInvoiceTableOrderId"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="CurrentInvoiceTableOrderDate"></td>
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="CurrentInvoiceTableAmount"></td>
                <td class="px-5 py-3" data-rentmyattr="CurrentInvoiceTableStatus"></td>
                <td class="px-5 py-3">
                  <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                    <i class="rm rm-eye text-base"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- New Items Table -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="NewItemsTable">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h6 class="RentSubTitle text-sm font-bold text-[var(--brand-text)]">New Items</h6>
        </div>
        <div class="overflow-x-auto">
          <table class="RentMyTable w-full text-sm">
            <thead>
              <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                <th class="px-5 py-3 text-left font-semibold">Request Date</th>
                <th class="px-5 py-3 text-left font-semibold">Request Type</th>
                <th class="px-5 py-3 text-left font-semibold">Item Name</th>
                <th class="px-5 py-3 text-left font-semibold">Quantity</th>
                <th class="px-5 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--brand-border)]">
              <tr data-rentmyattr="NewItemTableRow" class="hover:bg-[var(--brand-surface)] transition-colors">
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="ReturnItemTableOrderId"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableRequestDate"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableRequestType"></td>
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="ReturnItemTableItemName"><span data-rentmyattr="name"></span></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableQuantity"></td>
                <td class="px-5 py-3">
                  <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                    <i class="rm rm-eye text-base"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Next Invoice Table -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="NextInvoiceTable">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h6 class="RentSubTitle text-sm font-bold text-[var(--brand-text)]">Next Invoice</h6>
        </div>
        <div class="overflow-x-auto">
          <table class="RentMyTable w-full text-sm">
            <thead>
              <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                <th class="px-5 py-3 text-left font-semibold">Order Date</th>
                <th class="px-5 py-3 text-left font-semibold">Amount</th>
                <th class="px-5 py-3 text-left font-semibold">Status</th>
                <th class="px-5 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--brand-border)]">
              <tr data-rentmyattr="NextInvoiceTableRow" class="hover:bg-[var(--brand-surface)] transition-colors">
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="NextInvoiceTableOrderId"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="NextInvoiceTableOrderDate"></td>
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="NextInvoiceTableAmount"></td>
                <td class="px-5 py-3" data-rentmyattr="NextInvoiceTableStatus"></td>
                <td class="px-5 py-3">
                  <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                    <i class="rm rm-eye text-base"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</div>
', "status" => 1],
            ["slug" => "login", "name" => "Login", "contents" => '<div id="RentMyCustomerLoginContainer" class="RentMyWrapper min-h-screen bg-[var(--brand-surface)] flex items-center justify-center px-4 py-10">

  <div class="LoginElement w-full max-w-md bg-white rounded-2xl shadow-md border border-[var(--brand-border)] px-6 py-8 sm:px-10">

    <!-- Header -->
    <div class="mb-6 text-center">
      <h3 class="LoginTitle text-2xl font-bold text-[var(--brand-text)]">Welcome back</h3>
      <p class="mt-1 text-sm text-[var(--brand-text-muted)]">Sign in to your account</p>
    </div>

    <!-- Alert -->
    <div class="RentMyAlertMessage mb-4 hidden rounded-lg border border-[var(--brand-danger)] bg-[var(--brand-danger-light)] px-4 py-3 text-sm text-[var(--brand-danger)] [&:not(:empty)]:flex [&:not(:empty)]:items-start [&:not(:empty)]:gap-2"></div>

    <form class="RentMyFrom" id="RentMyCustomerLoginForm" novalidate>

      <!-- Email -->
      <div class="RentMyInputGroup flex flex-col gap-1 mb-4">
        <label class="text-xs font-medium text-[var(--brand-text-muted)]">Email address</label>
        <input type="text" name="email" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="you@example.com" />
      </div>

      <!-- Password -->
      <div class="RentMyInputGroup flex flex-col gap-1 mb-2">
        <div class="flex items-center justify-between">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Password</label>
          <a href="#" class="ForgotPassword text-xs text-[var(--brand-primary)] hover:text-[var(--brand-primary-dark)] transition-colors" RentMyPageLink="reset_password">Forgot password?</a>
        </div>
        <div data-rentmyattr="PasswordArea" class="relative">
          <input type="password" name="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Password" />
          <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
            <i class="rm rm-eye text-base" data-rentmyattr="EyeOn"></i>
            <i class="rm rm-eye-off text-base" data-rentmyattr="EyeOff" v-cloak></i>
          </button>
        </div>
      </div>

      <!-- Actions -->
      <div class="RentMyButtonGroup mt-6 flex flex-col gap-3">
        <button type="submit" class="RentMyBtn LoginBtn w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-6 py-2.5 transition-colors">
          Log in
        </button>
        <p class="text-center text-sm text-[var(--brand-text-muted)]">
          Don\'t have an account?
          <a href="#" class="NewAccount font-medium text-[var(--brand-primary)] hover:text-[var(--brand-primary-dark)] transition-colors" RentMyPageLink="registration">Sign up</a>
        </p>
      </div>

    </form>
  </div>

</div>
', "status" => 1],
            ["slug" => "registration", "name" => "Registration", "contents" => '<div id="RentMyCustomerRegistrationContainer" class="RentMyWrapper min-h-screen bg-[var(--brand-surface)] flex items-center justify-center px-4 py-10">

  <div class="RegistrationElement w-full max-w-xl bg-white rounded-2xl shadow-md border border-[var(--brand-border)] px-6 py-8 sm:px-10">

    <!-- Header -->
    <div class="mb-6 text-center">
      <h3 class="RegistrationTitle text-2xl font-bold text-[var(--brand-text)]">Create account</h3>
      <p class="mt-1 text-sm text-[var(--brand-text-muted)]">Fill in your details to get started</p>
    </div>

    <!-- Alert -->
    <div class="RentMyAlertMessage mb-4 hidden rounded-lg border border-[var(--brand-danger)] bg-[var(--brand-danger-light)] px-4 py-3 text-sm text-[var(--brand-danger)] [&:not(:empty)]:flex [&:not(:empty)]:items-start [&:not(:empty)]:gap-2"></div>

    <form class="RentMyFrom" id="RentMyCustomerRegistrationForm" novalidate>
      <div class="RentMyRow grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">

        <!-- First name -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">First name</label>
          <input type="text" name="first_name" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="First name">
        </div>

        <!-- Last name -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Last name</label>
          <input type="text" name="last_name" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Last name">
        </div>

        <!-- Email -->
        <div class="RentMyInputGroup RentMyFullwidth sm:col-span-2 flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Email address</label>
          <input type="email" name="email" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="you@example.com">
        </div>

        <!-- Company -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Company name</label>
          <input type="text" name="company_name" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Company name">
        </div>

        <!-- Mobile -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Contact number</label>
          <input type="text" name="mobile" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Contact number">
        </div>

        <!-- Password -->
        <div data-rentmyattr="PasswordArea" class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Password</label>
          <div class="relative">
            <input type="password" name="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Password">
            <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
              <i class="rm rm-eye text-base" data-rentmyattr="EyeOn"></i>
              <i class="rm rm-eye-off text-base" data-rentmyattr="EyeOff" v-cloak></i>
            </button>
          </div>
        </div>

        <!-- Confirm Password -->
        <div data-rentmyattr="ConfirmPasswordArea" class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Confirm password</label>
          <div class="relative">
            <input type="password" name="confirm_password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Confirm password">
            <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
              <i class="rm rm-eye text-base" data-rentmyattr="EyeOn"></i>
              <i class="rm rm-eye-off text-base" data-rentmyattr="EyeOff" v-cloak></i>
            </button>
          </div>
        </div>

        <!-- Address line 1 -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Address line 1</label>
          <input type="text" name="address_line1" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Enter a location">
        </div>

        <!-- Address line 2 -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Address line 2</label>
          <input type="text" name="address_line2" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Address line 2">
        </div>

        <!-- Country -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Country</label>
          <select name="country" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition">
            <option value="">Country</option>
          </select>
        </div>

        <!-- City -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">City</label>
          <input type="text" name="city" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="City">
        </div>

        <!-- State -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">State</label>
          <input type="text" name="state" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="State">
        </div>

        <!-- Zip code -->
        <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Zip code</label>
          <input type="text" name="zipcode" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Zip code">
        </div>

        <!-- Actions -->
        <div class="RentMyButtonGroup RentMyHalfwidth sm:col-span-2 flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button type="submit" class="RentMyBtn RegistrationBtn w-full sm:flex-1 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-6 py-2.5 transition-colors">
            Create account
          </button>
          <a href="#" class="LoginHere text-sm text-[var(--brand-primary)] hover:text-[var(--brand-primary-dark)] font-medium transition-colors" RentMyPageLink="login">
            Already have an account? <span class="underline">Log in</span>
          </a>
        </div>

      </div>
    </form>
  </div>

</div>
', "status" => 1],
            ["slug" => "reset-password", "name" => "Reset Password", "contents" => '<div id="RentMyResetPasswordContainer" class="RentMyWrapper min-h-screen bg-[var(--brand-surface)] flex items-start justify-center px-4 pt-16 pb-8">
  <div class="Contents w-full max-w-sm">
    <div class="card-body bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-8">
      <div class="userlogin-box flex flex-col gap-5">

        <!-- Describer -->
        <div class="Describer flex flex-col items-center text-center gap-2">
          <img src="" alt="forgot password" class="h-16 object-contain mb-1">
          <h1 class="Title text-xl font-bold text-[var(--brand-text)]" data-rentmyattr="Title">It happens to all of us.</h1>
          <p class="text-sm text-[var(--brand-text-muted)]" data-rentmyattr="SubTitle">Enter your email to reset your password</p>
        </div>

        <!-- Alert -->
        <div class="RentMyAlertMessage RentMyFullwidth hidden rounded-lg border border-[var(--brand-danger)] bg-[var(--brand-danger-light)] px-4 py-3 text-sm text-[var(--brand-danger)] [&:not(:empty)]:flex [&:not(:empty)]:items-start [&:not(:empty)]:gap-2" data-rentmyattr="AlertMessage"></div>

        <!-- Form -->
        <form class="flex flex-col gap-4">

          <input type="email" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Email*" Email>


          
          <div data-rentmyattr="PasswordArea" class="relative">
            <input type="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="New Password" data-rentmyattr="Password">
            <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
              <i class="rm rm-eye text-base" data-rentmyattr="EyeOn"></i>
              <i class="rm rm-eye-off text-base" data-rentmyattr="EyeOff" v-cloak></i>
            </button>
          </div>

          <div data-rentmyattr="ConfirmPasswordArea" class="relative">
            <input type="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Confirm Password" data-rentmyattr="ConfirmPassword">
            <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
              <i class="rm rm-eye text-base" data-rentmyattr="EyeOn"></i>
              <i class="rm rm-eye-off text-base" data-rentmyattr="EyeOff" v-cloak></i>
            </button>
          </div>

          <div class="RentMyButtonGroup flex gap-3">
            <button type="submit" class="RentMyBtn RentMyBackBtn RentMySubmitBtn flex-1 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors" data-rentmyattr="RentMySubmitBtn">Submit</button>
            <button type="submit" class="RentMyBtn RentMyBackBtn RentMyReturnBtn flex-1 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2.5 transition-colors" data-rentmyattr="RentMyReturnBtn">Return</button>
          </div>

        </form>

      </div>
    </div>
  </div>
</div>
', "status" => 1],
            ["slug" => "partner-login", "name" => "Partner Login", "contents" => '<div id="RentMyCustomerLoginContainer" class="RentMyWrapper PartnerLogin min-h-screen bg-[var(--brand-surface)] flex items-center justify-center px-4 py-8">
  <div class="LoginElement w-full max-w-4xl bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden flex flex-col md:flex-row">

    <!-- Left: form -->
    <div class="LoginElementLeftSide flex-1 p-8 flex flex-col justify-center gap-6">

      <h3 class="LoginTitle">
        <span class="text-2xl font-bold text-[var(--brand-text)] block">Partner Login</span>
        <span class="AuthSubTitle text-sm text-[var(--brand-text-muted)] mt-1 block">Login to Your Account</span>
      </h3>

      <div class="RentMyAlertMessage hidden rounded-lg border border-[var(--brand-danger)] bg-[var(--brand-danger-light)] px-4 py-3 text-sm text-[var(--brand-danger)] [&:not(:empty)]:flex [&:not(:empty)]:items-start [&:not(:empty)]:gap-2"></div>

      <form class="RentMyFrom flex flex-col gap-4" id="RentMyCustomerLoginForm">

        <div class="RentMyInputGroup flex flex-col gap-1">
          <label class="text-xs font-medium text-[var(--brand-text-muted)]">Email</label>
          <input type="text" name="email" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Email">
        </div>

        <div class="RentMyInputGroup flex flex-col gap-1">
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Password</label>
            <a href="#" class="ForgotPassword text-xs text-[var(--brand-primary)] hover:underline" RentMyPageLink="reset_password">Forgot Password?</a>
          </div>
          <div class="relative">
            <input type="password" name="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Password">
            <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
              <i class="rm rm-eye-off text-base"></i>
            </button>
          </div>
        </div>

        <div class="RentMyButtonGroup flex flex-col gap-3 pt-1">
          <button type="submit" class="RentMyBtn LoginBtn w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors">Log in</button>
          <p class="text-center text-xs text-[var(--brand-text-muted)]">
            Don\'t have an account?
            <a href="#" class="NewAccount text-[var(--brand-primary)] font-semibold hover:underline" RentMyPageLink="partner_registration">Sign Up</a>
          </p>
        </div>

      </form>
    </div>

    <!-- Right: image -->
    <div class="LoginElementRightSide hidden md:block w-80 flex-shrink-0">
      <img src="/image/clientlogin.jpeg" class="img-fluid w-full h-full object-cover" alt="client login image">
    </div>

  </div>
</div>
', "status" => 1],
            ["slug" => "partner-registration", "name" => "Partner Registration", "contents" => '<div id="RentMyCustomerRegistrationContainer" class="RentMyWrapper PartnerRegister min-h-screen bg-[var(--brand-surface)] flex items-center justify-center px-4 py-8">
  <div class="RegistrationElement w-full max-w-4xl bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden flex flex-col md:flex-row">

    <!-- Left: form -->
    <div class="LoginElementLeftSide flex-1 p-8 flex flex-col justify-center gap-6">

      <h3 class="RegistrationTitle">
        <span class="text-2xl font-bold text-[var(--brand-text)] block">Partner Sign Up</span>
        <span class="AuthSubTitle text-sm text-[var(--brand-text-muted)] mt-1 block">Create Your Account</span>
      </h3>

      <div class="RentMyAlertMessage hidden rounded-lg border border-[var(--brand-danger)] bg-[var(--brand-danger-light)] px-4 py-3 text-sm text-[var(--brand-danger)] [&:not(:empty)]:flex [&:not(:empty)]:items-start [&:not(:empty)]:gap-2"></div>

      <form class="RentMyFrom" id="RentMyCustomerRegistrationForm">
        <div class="RentMyRow grid grid-cols-1 sm:grid-cols-2 gap-4">

          <!-- Name -->
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">First Name</label>
            <input type="text" name="first_name" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="First name">
          </div>
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Last Name</label>
            <input type="text" name="last_name" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Last name">
          </div>

          <!-- Email -->
          <div class="RentMyInputGroup RentMyFullwidth sm:col-span-2 flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Email</label>
            <input type="email" name="email" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Email">
          </div>

          <!-- Company / Contact -->
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Company Name</label>
            <input type="text" name="company_name" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Company name">
          </div>
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Contact Name</label>
            <input type="text" name="contact" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Contact name">
          </div>

          <!-- Password -->
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Password</label>
            <div class="relative">
              <input type="password" name="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Password">
              <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
                <i class="rm rm-eye-off text-base" data-rentmyattr="TogglePassword"></i>
              </button>
            </div>
          </div>
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Confirm Password</label>
            <div class="relative">
              <input type="password" name="confirm_password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Password Confirm">
              <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
                <i class="rm rm-eye-off text-base" data-rentmyattr="ToggleConfirmPassword"></i>
              </button>
            </div>
          </div>

          <!-- Address divider -->
          <div class="sm:col-span-2 border-t border-[var(--brand-border)] pt-2">
            <p class="text-xs font-bold text-[var(--brand-text-muted)] uppercase tracking-wide">Address</p>
          </div>

          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Address Line 1</label>
            <input type="text" name="address_line1" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Enter a location">
          </div>
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Address Line 2</label>
            <input type="text" name="address_line2" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Address line 2">
          </div>

          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Country</label>
            <select name="country" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition">
              <option value="">Country</option>
            </select>
          </div>
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">City</label>
            <input type="text" name="city" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="City">
          </div>

          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">State</label>
            <input type="text" name="state" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="State">
          </div>
          <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Zip Code</label>
            <input type="text" name="zipcode" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Zip code">
          </div>

          <!-- Submit -->
          <div class="RentMyButtonGroup RentMyHalfwidth sm:col-span-2 flex flex-col gap-3 pt-1">
            <button type="submit" class="RentMyBtn RegistrationBtn w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors">Sign up</button>
            <p class="text-center text-xs text-[var(--brand-text-muted)]">
              Already have an account?
              <a href="#" class="LoginHere text-[var(--brand-primary)] font-semibold hover:underline" RentMyPageLink="partner_login">Login here</a>
            </p>
          </div>

        </div>
      </form>
    </div>

    <!-- Right: image -->
    <div class="LoginElementRightSide hidden md:block w-80 flex-shrink-0">
      <img src="/image/clientlogin.jpeg" class="img-fluid w-full h-full object-cover" alt="client login image">
    </div>

  </div>
</div>
', "status" => 1],
            ["slug" => "profile", "name" => "Customer Profile", "contents" => '<div id="RentMyCustomerProfileContainer" class="RentMyWrapper RentMyCustomerPortalWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="RentMyCustomPortalRow max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 items-start">

    <!-- Sidebar -->
    <div class="RentMyLeftSidebarmenu w-full md:w-56 flex-shrink-0">
      <div class="RentMyLeftSidebarmenuInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="SideBar">

        <div class="RentMyProfileImge flex flex-col items-center py-6 px-4 border-b border-[var(--brand-border)]">
          <img ProfileImage src="" alt="" class="w-16 h-16 rounded-full object-cover bg-[var(--brand-surface)] border-2 border-[var(--brand-border)]">
          <h5 class="RentMyProfileName mt-2 text-sm font-semibold text-[var(--brand-text)] text-center" data-rentmyattr="customer_name">{{ customer_name }}</h5>
        </div>

        <nav class="RentMySideMenu py-2">
          <ul class="space-y-0.5 px-2">
            <li><a data-rentmyattr="RentMyPageLink=customer_profile" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Profile</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_password" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Password</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_avatar" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Avatar</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_order_history" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Order History</a></li>
            <li data-rentmyattr="DashboardNav"><a RentMyPageLink="customer_order_dashboard" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Dashboard</a></li>
            <li data-rentmyattr="BillingNav"><a RentMyPageLink="customer_billing" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Billing</a></li>
            <li class="pt-1 border-t border-[var(--brand-border)] mt-1">
              <a class="rentmy_logout_btn flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors cursor-pointer">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="RentMyRightContent flex-1 min-w-0 flex flex-col gap-6">

      <!-- Profile info card -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">

        <!-- Page header -->
        <div class="RentMyPageHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
          <h3 class="text-base font-bold text-[var(--brand-text)]">Profile Information</h3>
          <div class="RentMyPageHeaderRightSide"></div>
        </div>

        <div class="RentMyContentBody p-5">
          <div class="RentMyContentBodyInner RentMyContentBodyInner__modify">

            <!-- View mode -->
            <div class="RentMyCustomerInfo" id="RentmyCustomerDetailsSection">
              <div class="RentmyCustomerDetails flex flex-col gap-1 mb-4">
                <h5 class="text-sm font-bold text-[var(--brand-text)]" data-rentmyattr="customer_name">{{ customer_name }}</h5>
                <span class="text-sm text-[var(--brand-text-muted)]" data-rentmyattr="customer_email">{{ customer_email }}</span>
                <span class="text-sm text-[var(--brand-text-muted)]" data-rentmyattr="customer_company_name">{{ customer_company_name }}</span>
                <span class="text-sm text-[var(--brand-text-muted)]" data-rentmyattr="customer_phone">{{ customer_phone }}</span>
              </div>
              <div class="RentMyEditArea">
                <a id="RentmyCustomerEditBtn" href="#" class="RentMyBtn RentMyEditBtn inline-flex items-center gap-1.5 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-4 py-2 transition-colors" data-rentmyattr="EditButton">
                  <i class="rm rm-edit text-base"></i> Edit
                </a>
              </div>
            </div>

            <!-- Edit form -->
            <form id="RentmyCustomerEditForm" class="mt-4">
              <div class="RentMyRow grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div class="RentMyAlertMessage RentMyFullwidth sm:col-span-2 hidden rounded-lg border border-[var(--brand-danger)] bg-[var(--brand-danger-light)] px-4 py-3 text-sm text-[var(--brand-danger)] [&:not(:empty)]:flex [&:not(:empty)]:items-start [&:not(:empty)]:gap-2"></div>

                <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
                  <label for="first_name" class="text-xs font-medium text-[var(--brand-text-muted)]">First Name</label>
                  <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="first_name" id="first_name" required>
                </div>

                <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
                  <label for="last_name" class="text-xs font-medium text-[var(--brand-text-muted)]">Last Name</label>
                  <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="last_name" id="last_name" required>
                </div>

                <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
                  <label for="email" class="text-xs font-medium text-[var(--brand-text-muted)]">Email</label>
                  <input type="email" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="email" id="email" required>
                </div>

                <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
                  <label for="mobile" class="text-xs font-medium text-[var(--brand-text-muted)]">Mobile Number</label>
                  <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="mobile" id="mobile" required>
                </div>

                <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1">
                  <label for="company" class="text-xs font-medium text-[var(--brand-text-muted)]">Company Name</label>
                  <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="company" id="company" required>
                </div>

                <div class="RentMyButtonGroup RentMyNotBetween RentMyHalfwidth flex items-end gap-3 pb-0.5">
                  <button id="RentmyCustomerSubmitBtn" type="submit" class="RentMyBtn RentMyCustomerInfoSubmit bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors">Submit</button>
                  <button id="RentmyCustomerCancelBtn" type="button" class="RentMyBtn RentMyCustomerInfoCancel border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2.5 transition-colors">Cancel</button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>

      <!-- Address list card -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" id="RentmyCustomerAddessList">

        <div class="FlexHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
          <h5 class="AddressHeader text-sm font-bold text-[var(--brand-text)]">Address</h5>
          <a class="RentMyBtn RentMyEditBtn addAddress inline-flex items-center gap-1.5 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-3 py-1.5 transition-colors" tooltip="Add Address" data-rentmyattr="AddAddressBtn">
            <i class="rm rm-plus text-base"></i> Add Address
          </a>
        </div>

        <div class="AddressBody p-5 space-y-3" data-rentmyattr="AddressBody">
          <div data-rentmyattr="AddressGroup" class="rounded-xl border border-[var(--brand-border)] overflow-hidden">
            <div class="px-4 py-2 bg-[var(--brand-surface)] border-b border-[var(--brand-border)]">
              <h5 class="AddressSubHeader text-xs font-bold text-[var(--brand-text)] uppercase tracking-wide" data-rentmyattr="AddressType">Primary</h5>
            </div>
            <div class="Address flex items-start justify-between gap-3 px-4 py-3" data-rentmyattr="Address">
              <label class="text-sm text-[var(--brand-text-muted)] flex-1">ADD 1 ADD2 New York NY 11435 US</label>
              <div class="Actions flex items-center gap-1 flex-shrink-0">
                <button class="btn btn-sm biling-address-edit inline-flex items-center justify-center w-7 h-7 rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors" tooltip="Delete" data-rentmyattr="IconTrash">
                  <i class="rm rm-trash text-base"></i>
                </button>
                <button class="btn btn-sm biling-address-edit inline-flex items-center justify-center w-7 h-7 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors" tooltip="Update" data-rentmyattr="IconEdit">
                  <i class="rm rm-edit text-base"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Address add/edit form -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h5 class="text-sm font-bold text-[var(--brand-text)]">Address Details</h5>
        </div>
        <div class="p-5">
          <form id="RentmyAddressAddEditForm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div class="RentMyInputGroup flex flex-col gap-1">
                <label for="type" class="text-xs font-medium text-[var(--brand-text-muted)]">Address Type (Primary / Office / Home)</label>
                <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="type">
              </div>

              <div class="RentMyInputGroup flex flex-col gap-1">
                <label for="addr_mobile" class="text-xs font-medium text-[var(--brand-text-muted)]">Mobile</label>
                <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="mobile">
              </div>

              <div class="RentMyInputGroup flex flex-col gap-1">
                <label for="country" class="text-xs font-medium text-[var(--brand-text-muted)]">Country</label>
                <select class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition" name="country">
                  <option value="">Country</option>
                </select>
              </div>

              <div class="RentMyInputGroup flex flex-col gap-1">
                <label for="address_line1" class="text-xs font-medium text-[var(--brand-text-muted)]">Address</label>
                <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="address_line1">
              </div>

              <div class="RentMyInputGroup flex flex-col gap-1">
                <label for="city" class="text-xs font-medium text-[var(--brand-text-muted)]">City</label>
                <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="city">
              </div>

              <div class="RentMyInputGroup flex flex-col gap-1">
                <label for="state" class="text-xs font-medium text-[var(--brand-text-muted)]">State</label>
                <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="state">
              </div>

              <div class="RentMyInputGroup flex flex-col gap-1">
                <label for="zipcode" class="text-xs font-medium text-[var(--brand-text-muted)]">Zipcode</label>
                <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="zipcode">
              </div>

              <div class="sm:col-span-2 flex flex-wrap gap-3">
                <button id="RentmyAddressAddBtn" type="submit" class="RentMyBtn RentMyCustomerInfoSubmit bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors">Add Address</button>
                <button id="RentmyAddressUpdateBtn" type="submit" class="RentMyBtn RentMyCustomerInfoSubmit bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors">Update Address</button>
                <button id="RentmyAddressCancelBtn" type="button" class="RentMyBtn RentMyCustomerInfoCancel border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2.5 transition-colors">Cancel</button>
              </div>

            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</div>
', "status" => 1],
            ["slug" => "change-password", "name" => "Change Password", "contents" => '<div id="RentMyCustomerChangePasswordContainer" class="RentMyWrapper RentMyCustomerPortalWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="RentMyCustomPortalRow max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 items-start">

    <!-- Sidebar -->
    <div class="RentMyLeftSidebarmenu w-full md:w-56 flex-shrink-0">
      <div class="RentMyLeftSidebarmenuInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="SideBar">

        <div class="RentMyProfileImge flex flex-col items-center py-6 px-4 border-b border-[var(--brand-border)]">
          <img src="" alt="" data-rentmyattr="ProfileImage" class="w-16 h-16 rounded-full object-cover bg-[var(--brand-surface)] border-2 border-[var(--brand-border)]">
          <h5 class="RentMyProfileName mt-2 text-sm font-semibold text-[var(--brand-text)] text-center" data-rentmyattr="customer_name">{{ customer_name }}</h5>
        </div>

        <nav class="RentMySideMenu py-2">
          <ul class="space-y-0.5 px-2">
            <li><a data-rentmyattr="RentMyPageLink=customer_profile" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Profile</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_password" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Password</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_avatar" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Avatar</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_order_history" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Order History</a></li>
            <li data-rentmyattr="DashboardNav"><a RentMyPageLink="customer_order_dashboard" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Dashboard</a></li>
            <li data-rentmyattr="BillingNav"><a RentMyPageLink="customer_billing" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Billing</a></li>
            <li class="pt-1 border-t border-[var(--brand-border)] mt-1">
              <a class="rentmy_logout_btn flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors cursor-pointer">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="RentMyRightContent flex-1 min-w-0">
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-6">

        <!-- Page header -->
        <div class="RentMyPageHeader flex items-center justify-between mb-6 pb-4 border-b border-[var(--brand-border)]">
          <h3 class="text-lg font-bold text-[var(--brand-text)]">Change Password</h3>
          <div class="RentMyPageHeaderRightSide"></div>
        </div>

        <div class="RentMyContentBody">
          <div class="RentMyContentBodyInner RentMyContentBodyInner__modify max-w-md">
            <form id="RentMyChangePasswordForm">
              <div class="RentMyRow flex flex-col gap-4">

                <!-- Alert -->
                <div class="RentMyAlertMessage RentMyFullwidth hidden rounded-lg border border-[var(--brand-danger)] bg-[var(--brand-danger-light)] px-4 py-3 text-sm text-[var(--brand-danger)] [&:not(:empty)]:flex [&:not(:empty)]:items-start [&:not(:empty)]:gap-2"></div>

                <!-- Old password -->
                <div data-rentmyattr="OldPasswordArea" class="RentMyInputGroup RentMyFullwidth flex flex-col gap-1">
                  <label for="old_password" class="text-xs font-medium text-[var(--brand-text-muted)]">Old Password</label>
                  <div class="relative">
                    <input type="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="old_password" id="old_password">
                    <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
                      <i class="rm rm-eye text-base" data-rentmyattr="EyeOn"></i>
                      <i class="rm rm-eye-off text-base" data-rentmyattr="EyeOff" v-cloak></i>
                    </button>
                  </div>
                </div>

                <!-- New password -->
                <div data-rentmyattr="NewPasswordArea" class="RentMyInputGroup RentMyFullwidth flex flex-col gap-1">
                  <label for="password" class="text-xs font-medium text-[var(--brand-text-muted)]">New Password</label>
                  <div class="relative">
                    <input type="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="password" id="password">
                    <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
                      <i class="rm rm-eye text-base" data-rentmyattr="EyeOn"></i>
                      <i class="rm rm-eye-off text-base" data-rentmyattr="EyeOff" v-cloak></i>
                    </button>
                  </div>
                </div>

                <!-- Confirm password -->
                <div data-rentmyattr="ConfirmPasswordArea" class="RentMyInputGroup RentMyFullwidth flex flex-col gap-1">
                  <label for="confirm_password" class="text-xs font-medium text-[var(--brand-text-muted)]">Confirm Password</label>
                  <div class="relative">
                    <input type="password" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-10 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" name="confirm_password" id="confirm_password">
                    <button type="button" class="AuthEyeIcon absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[var(--brand-primary)] transition-colors">
                      <i class="rm rm-eye text-base" data-rentmyattr="EyeOn"></i>
                      <i class="rm rm-eye-off text-base" data-rentmyattr="EyeOff" v-cloak></i>
                    </button>
                  </div>
                </div>

                <!-- Submit -->
                <div class="RentMyButtonGroup RentMyNotBetween pt-1">
                  <button id="RentMyChangePasswordSubmit" type="button" class="RentMyBtn RentMyPassSubmitBtn bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-6 py-2.5 transition-colors">
                    Submit
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
', "status" => 1],
            ["slug" => "change-avatar", "name" => "Change Avatar", "contents" => '<div id="RentMyCustomerChangeAvatarContainer" class="RentMyWrapper RentMyCustomerPortalWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="RentMyCustomPortalRow max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 items-start">

    <!-- Sidebar -->
    <div class="RentMyLeftSidebarmenu w-full md:w-56 flex-shrink-0">
      <div class="RentMyLeftSidebarmenuInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="SideBar">

        <div class="RentMyProfileImge flex flex-col items-center py-6 px-4 border-b border-[var(--brand-border)]">
          <img src="" alt="" data-rentmyattr="ProfileImage" class="w-16 h-16 rounded-full object-cover bg-[var(--brand-surface)] border-2 border-[var(--brand-border)]">
          <h5 class="RentMyProfileName mt-2 text-sm font-semibold text-[var(--brand-text)] text-center" data-rentmyattr="customer_name">{{ customer_name }}</h5>
        </div>

        <nav class="RentMySideMenu py-2">
          <ul class="space-y-0.5 px-2">
            <li><a data-rentmyattr="RentMyPageLink=customer_profile" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Profile</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_password" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Password</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_avatar" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Avatar</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_order_history" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Order History</a></li>
            <li data-rentmyattr="DashboardNav"><a RentMyPageLink="customer_order_dashboard" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Dashboard</a></li>
            <li data-rentmyattr="BillingNav"><a RentMyPageLink="customer_billing" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Billing</a></li>
            <li class="pt-1 border-t border-[var(--brand-border)] mt-1">
              <a class="rentmy_logout_btn flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors cursor-pointer">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="RentMyRightContent flex-1 min-w-0">
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-6">

        <!-- Page header -->
        <div class="RentMyPageHeader flex items-center justify-between mb-6 pb-4 border-b border-[var(--brand-border)]">
          <h3 class="text-lg font-bold text-[var(--brand-text)]">Change Avatar</h3>
          <div class="RentMyPageHeaderRightSide"></div>
        </div>

        <!-- Content -->
        <div class="RentMyContentBody">
          <div class="RentMyContentBodyInner RentMyContentBodyInner__modify">
            <form id="RentMyFileUploadForm">
              <div class="RentMyRow flex flex-col gap-5">

                <!-- Alert -->
                <div class="RentMyAlertMessage RentMyFullwidth hidden rounded-lg border border-[var(--brand-danger)] bg-[var(--brand-danger-light)] px-4 py-3 text-sm text-[var(--brand-danger)] [&:not(:empty)]:flex [&:not(:empty)]:items-start [&:not(:empty)]:gap-2"></div>

                <!-- File upload -->
                <div class="RentMyInputGroup RentMyFullwidth flex flex-col gap-2">
                  <label class="text-xs font-medium text-[var(--brand-text-muted)]">Upload Image <span class="text-gray-400">(Max 2MB)</span></label>
                  <div class="RentMyFileUpload" data-rentmyattr="FileUploadArea">
                    <div class="FileSelect flex items-center gap-3 border border-dashed border-[var(--brand-border)] hover:border-[var(--brand-primary)] rounded-xl px-4 py-3 cursor-pointer transition-colors group relative">
                      <div class="FileSelectButton inline-flex items-center gap-1.5 bg-[var(--brand-surface)] group-hover:bg-[var(--brand-primary-light)] border border-[var(--brand-border)] group-hover:border-[var(--brand-primary)] text-[var(--brand-text-muted)] group-hover:text-[var(--brand-primary)] text-sm font-medium rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap">
                        <i class="rm rm-plus text-base"></i> Choose File
                      </div>
                      <div class="FileSelectName text-sm text-[var(--brand-text-muted)] truncate" data-rentmyattr="FileName">No file chosen…</div>
                      <input type="file" name="chooseFile" class="absolute inset-0 opacity-0 cursor-pointer w-full h-full">
                    </div>
                  </div>
                </div>

                <!-- Preview + upload button -->
                <div class="RentMyButtonGroup RentMyNotBetween flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button id="RentMyFileUploadSubmitBtn" type="button" class="RentMyBtn RentMyUploadBtn bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors">
                    Upload
                  </button>
                  <img class="PreviewImage w-20 h-20 rounded-full object-cover border-2 border-[var(--brand-border)] shadow-sm" data-rentmyattr="PreviewImage" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
', "status" => 1],
            ["slug" => "order-history", "name" => "Order History", "contents" => '<div id="RentMyCustomerOrderHistory" class="RentMyWrapper RentMyCustomerPortalWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="RentMyCustomPortalRow max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 items-start">

    <!-- Sidebar -->
    <div class="RentMyLeftSidebarmenu w-full md:w-56 flex-shrink-0">
      <div class="RentMyLeftSidebarmenuInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" SideBar>

        <div class="RentMyProfileImge flex flex-col items-center py-6 px-4 border-b border-[var(--brand-border)]">
          <img src="" alt="" ProfileImage class="w-16 h-16 rounded-full object-cover bg-[var(--brand-surface)] border-2 border-[var(--brand-border)]">
          <h5 class="RentMyProfileName mt-2 text-sm font-semibold text-[var(--brand-text)] text-center">{{ customer_name }}</h5>
        </div>

        <nav class="RentMySideMenu py-2">
          <ul class="space-y-0.5 px-2">
            <li><a RentMyPageLink="customer_profile" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Profile</a></li>
            <li><a RentMyPageLink="customer_change_password" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Password</a></li>
            <li><a RentMyPageLink="customer_change_avatar" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Avatar</a></li>
            <li><a RentMyPageLink="customer_order_history" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Order History</a></li>
            <li data-rentmyattr="DashboardNav"><a RentMyPageLink="customer_order_dashboard" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Dashboard</a></li>
            <li data-rentmyattr="BillingNav"><a RentMyPageLink="customer_billing" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Billing</a></li>
            <li class="pt-1 border-t border-[var(--brand-border)] mt-1">
              <a class="rentmy_logout_btn flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors cursor-pointer">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="RentMyRightContent flex-1 min-w-0">
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden">

        <!-- Page header -->
        <div class="RentMyPageHeader flex items-center justify-between px-5 py-4 border-b border-[var(--brand-border)]">
          <h3 class="text-base font-bold text-[var(--brand-text)]">Order History</h3>
          <div class="RentMyPageHeaderRightSide"></div>
        </div>

        <div class="RentMyContentBody">
          <div class="RentMyContentBodyInner RentMyContentBodyInner__modify">

            <div id="RentMyOrderHistory" class="overflow-x-auto">
              <table class="RentMyTable RentMyTableStriped w-full text-sm" OrderListTable>
                <thead>
                  <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                    <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                    <th class="px-5 py-3 text-left font-semibold">Address</th>
                    <th class="px-5 py-3 text-left font-semibold">Quantity</th>
                    <th class="px-5 py-3 text-left font-semibold">Price</th>
                    <th class="px-5 py-3 text-left font-semibold">Status</th>
                    <th class="px-5 py-3 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[var(--brand-border)]">
                  <tr class="hover:bg-[var(--brand-surface)] transition-colors">
                    <td class="px-5 py-3 text-[var(--brand-text)] font-medium">{{order_id}}</td>
                    <td class="px-5 py-3 text-[var(--brand-text-muted)]">{{order_address}}</td>
                    <td class="px-5 py-3 text-[var(--brand-text-muted)]">{{total_quantity}}</td>
                    <td class="px-5 py-3 text-[var(--brand-text)]">{{total_price}}</td>
                    <td class="px-5 py-3 text-[var(--brand-text-muted)]">{{status}}</td>
                    <td class="InlineFlex px-5 py-3 flex items-center gap-1">
                      <a ViewDetails class="inline-flex items-center justify-center w-7 h-7 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                        <i class="rm rm-eye text-base"></i>
                      </a>
                      <a DownloadPDF class="inline-flex items-center justify-center w-7 h-7 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                        <i class="rm rm-file-pdf text-base"></i>
                      </a>
                      <a DeleteOrder class="inline-flex items-center justify-center w-7 h-7 rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors">
                        <i class="rm rm-trash text-base"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div id="RentMyPagination" class="px-5 py-4"></div>

          </div>
        </div>

      </div>
    </div>

  </div>
</div>
', "status" => 1],
            ["slug" => "order-dashboard", "name" => "Order Dashboard", "contents" => '<div id="RentMyCustomerDashboardContainer" class="RentMyWrapper RentMyCustomerPortalWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="RentMyCustomPortalRow max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 items-start">

    <!-- Sidebar -->
    <div class="RentMyLeftSidebarmenu w-full md:w-56 flex-shrink-0">
      <div class="RentMyLeftSidebarmenuInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="SideBar">

        <div class="RentMyProfileImge flex flex-col items-center py-6 px-4 border-b border-[var(--brand-border)]">
          <img src="" alt="" data-rentmyattr="ProfileImage" class="w-16 h-16 rounded-full object-cover bg-[var(--brand-surface)] border-2 border-[var(--brand-border)]">
          <h5 class="RentMyProfileName mt-2 text-sm font-semibold text-[var(--brand-text)] text-center" data-rentmyattr="customer_name">{{ customer_name }}</h5>
        </div>

        <nav class="RentMySideMenu py-2">
          <ul class="space-y-0.5 px-2">
            <li><a data-rentmyattr="RentMyPageLink=customer_profile" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Profile</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_password" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Password</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_change_avatar" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Change Avatar</a></li>
            <li><a data-rentmyattr="RentMyPageLink=customer_order_history" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Order History</a></li>
            <li data-rentmyattr="DashboardNav"><a data-rentmyattr="RentMyPageLink=customer_order_dashboard" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Dashboard</a></li>
            <li data-rentmyattr="BillingNav"><a data-rentmyattr="RentMyPageLink=customer_billing" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors cursor-pointer">Billing</a></li>
            <li class="pt-1 border-t border-[var(--brand-border)] mt-1">
              <a class="rentmy_logout_btn flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors cursor-pointer">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="RentMyRightContent flex-1 min-w-0 flex flex-col gap-6">

      <!-- Stat cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <!-- Return Items -->
        <div class="RentMyCardBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-4" data-rentmyattr="ReturnItemBox">
          <div class="flex items-center gap-3 mb-3">
            <div class="RentMyCardIcon w-10 h-10 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center flex-shrink-0">
              <i class="rm rm-bag text-xl text-[var(--brand-primary)]"></i>
            </div>
            <span class="RentMyCardTitle text-xs font-medium text-[var(--brand-text-muted)]">Return Items</span>
          </div>
          <div class="RentMyCardValue text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="ReturnItemNumber">3</div>
        </div>

        <!-- Current Invoice -->
        <div class="RentMyCardBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-4" data-rentmyattr="CurrentInvoiceBox">
          <div class="flex items-center gap-3 mb-3">
            <div class="RentMyCardIcon w-10 h-10 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center flex-shrink-0">
              <i class="rm rm-file-pdf text-xl text-[var(--brand-primary)]"></i>
            </div>
            <span class="RentMyCardTitle text-xs font-medium text-[var(--brand-text-muted)]">Current Invoice</span>
          </div>
          <div class="RentMyCardValue text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="CurrentInvoiceTotal">$557</div>
        </div>

        <!-- New Items -->
        <div class="RentMyCardBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-4" data-rentmyattr="NewItemBox">
          <div class="flex items-center gap-3 mb-3">
            <div class="RentMyCardIcon w-10 h-10 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center flex-shrink-0">
              <i class="rm rm-plus text-xl text-[var(--brand-primary)]"></i>
            </div>
            <span class="RentMyCardTitle text-xs font-medium text-[var(--brand-text-muted)]">New Items</span>
          </div>
          <div class="RentMyCardValue text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="NewItemsNumber">1</div>
        </div>

        <!-- Next Invoice -->
        <div class="RentMyCardBox bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-4" data-rentmyattr="NextInvoiceBox">
          <div class="flex items-center gap-3 mb-3">
            <div class="RentMyCardIcon w-10 h-10 rounded-xl bg-[var(--brand-primary-light)] flex items-center justify-center flex-shrink-0">
              <i class="rm rm-send text-xl text-[var(--brand-primary)]"></i>
            </div>
            <span class="RentMyCardTitle text-xs font-medium text-[var(--brand-text-muted)]">Next Invoice</span>
          </div>
          <div class="RentMyCardValue text-2xl font-bold text-[var(--brand-text)]" data-rentmyattr="NextInvoiceTotal">$828</div>
        </div>

      </div>

      <!-- Return Items Table -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="ReturnItemTable">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h6 class="RentSubTitle text-sm font-bold text-[var(--brand-text)]">Return Items</h6>
        </div>
        <div class="overflow-x-auto">
          <table class="RentMyTable w-full text-sm">
            <thead>
              <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                <th class="px-5 py-3 text-left font-semibold">Request Date</th>
                <th class="px-5 py-3 text-left font-semibold">Request Type</th>
                <th class="px-5 py-3 text-left font-semibold">Item Name</th>
                <th class="px-5 py-3 text-left font-semibold">Quantity</th>
                <th class="px-5 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--brand-border)]">
              <tr data-rentmyattr="ReturnItemTableRow" class="hover:bg-[var(--brand-surface)] transition-colors">
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="ReturnItemTableOrderId"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableRequestDate"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableRequestType"></td>
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="ReturnItemTableItemName"><span data-rentmyattr="name"></span></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableQuantity"></td>
                <td class="px-5 py-3">
                  <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                    <i class="rm rm-eye text-base"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Current Invoice Table -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="CurrentInvoiceTable">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h6 class="RentSubTitle text-sm font-bold text-[var(--brand-text)]">Current Invoice</h6>
        </div>
        <div class="overflow-x-auto">
          <table class="RentMyTable w-full text-sm">
            <thead>
              <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                <th class="px-5 py-3 text-left font-semibold">Order Date</th>
                <th class="px-5 py-3 text-left font-semibold">Amount</th>
                <th class="px-5 py-3 text-left font-semibold">Status</th>
                <th class="px-5 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--brand-border)]">
              <tr data-rentmyattr="CurrentInvoiceTableRow" class="hover:bg-[var(--brand-surface)] transition-colors">
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="CurrentInvoiceTableOrderId"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="CurrentInvoiceTableOrderDate"></td>
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="CurrentInvoiceTableAmount"></td>
                <td class="px-5 py-3" data-rentmyattr="CurrentInvoiceTableStatus"></td>
                <td class="px-5 py-3">
                  <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                    <i class="rm rm-eye text-base"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- New Items Table -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="NewItemsTable">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h6 class="RentSubTitle text-sm font-bold text-[var(--brand-text)]">New Items</h6>
        </div>
        <div class="overflow-x-auto">
          <table class="RentMyTable w-full text-sm">
            <thead>
              <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                <th class="px-5 py-3 text-left font-semibold">Request Date</th>
                <th class="px-5 py-3 text-left font-semibold">Request Type</th>
                <th class="px-5 py-3 text-left font-semibold">Item Name</th>
                <th class="px-5 py-3 text-left font-semibold">Quantity</th>
                <th class="px-5 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--brand-border)]">
              <tr data-rentmyattr="NewItemTableRow" class="hover:bg-[var(--brand-surface)] transition-colors">
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="ReturnItemTableOrderId"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableRequestDate"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableRequestType"></td>
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="ReturnItemTableItemName"><span data-rentmyattr="name"></span></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="ReturnItemTableQuantity"></td>
                <td class="px-5 py-3">
                  <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                    <i class="rm rm-eye text-base"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Next Invoice Table -->
      <div class="bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" data-rentmyattr="NextInvoiceTable">
        <div class="px-5 py-4 border-b border-[var(--brand-border)]">
          <h6 class="RentSubTitle text-sm font-bold text-[var(--brand-text)]">Next Invoice</h6>
        </div>
        <div class="overflow-x-auto">
          <table class="RentMyTable w-full text-sm">
            <thead>
              <tr class="bg-[var(--brand-surface)] text-[var(--brand-text-muted)] text-xs uppercase">
                <th class="px-5 py-3 text-left font-semibold">Order ID</th>
                <th class="px-5 py-3 text-left font-semibold">Order Date</th>
                <th class="px-5 py-3 text-left font-semibold">Amount</th>
                <th class="px-5 py-3 text-left font-semibold">Status</th>
                <th class="px-5 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--brand-border)]">
              <tr data-rentmyattr="NextInvoiceTableRow" class="hover:bg-[var(--brand-surface)] transition-colors">
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="NextInvoiceTableOrderId"></td>
                <td class="px-5 py-3 text-[var(--brand-text-muted)]" data-rentmyattr="NextInvoiceTableOrderDate"></td>
                <td class="px-5 py-3 text-[var(--brand-text)]" data-rentmyattr="NextInvoiceTableAmount"></td>
                <td class="px-5 py-3" data-rentmyattr="NextInvoiceTableStatus"></td>
                <td class="px-5 py-3">
                  <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">
                    <i class="rm rm-eye text-base"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</div>
', "status" => 1],
            ["slug" => "customer-billing", "name" => "Customer Billing", "contents" => '<div id="RentMyCustomerBillingContainer" class="RentMyWrapper RentMyCustomerPortalWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-8">
  <div class="RentMyCustomPortalRow max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 items-start">

    <!-- Sidebar -->
    <div class="RentMyLeftSidebarmenu w-full md:w-56 flex-shrink-0">
      <div class="RentMyLeftSidebarmenuInner bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden" SideBar>

        <!-- Avatar -->
        <div class="RentMyProfileImge flex flex-col items-center py-6 px-4 border-b border-[var(--brand-border)]">
          <img ProfileImage src="" alt="" class="w-16 h-16 rounded-full object-cover bg-[var(--brand-surface)] border-2 border-[var(--brand-border)]">
          <h5 class="RentMyProfileName mt-2 text-sm font-semibold text-[var(--brand-text)] text-center">{{ customer_name }}</h5>
        </div>

        <!-- Nav -->
        <nav class="RentMySideMenu py-2">
          <ul class="space-y-0.5 px-2">
            <li><a RentMyPageLink="customer_profile" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">Profile</a></li>
            <li><a RentMyPageLink="customer_change_password" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">Change Password</a></li>
            <li><a RentMyPageLink="customer_change_avatar" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">Change Avatar</a></li>
            <li><a RentMyPageLink="customer_order_history" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">Order History</a></li>
            <li data-rentmyattr="DashboardNav"><a RentMyPageLink="customer_order_dashboard" class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-text-muted)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] transition-colors">Dashboard</a></li>
            <li data-rentmyattr="BillingNav"><a RentMyPageLink="customer_billing" class="active flex items-center gap-2 px-3 py-2 text-sm rounded-lg font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] transition-colors">Billing</a></li>
            <li class="pt-1 border-t border-[var(--brand-border)] mt-1">
              <a class="rentmy_logout_btn flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-[var(--brand-danger)] hover:bg-[var(--brand-danger-light)] transition-colors cursor-pointer">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="RentMyRightContent flex-1 min-w-0">
      <div class="rentMyPaymentMethods bg-white rounded-2xl border border-[var(--brand-border)] shadow-sm p-6">

        <!-- Header -->
        <div class="rentMyHeader flex items-center justify-between mb-6 pb-4 border-b border-[var(--brand-border)]">
          <h2 class="rentMyTitle text-lg font-bold text-[var(--brand-text)]">Payment Methods</h2>
          <button class="rentMyAddButton inline-flex items-center gap-1.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-4 py-2 transition-colors" data-rentmyattr="AddCardBtn">
            <i class="rm rm-plus text-base"></i> Add Card
          </button>
        </div>

        <div class="rentMyCardContainer">

          <!-- Card form -->
          <div class="RentMyCardForm mb-6" data-rentmyattr="CardFormInfo">
            <div class="RentMyRow grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">

              <!-- Name on card -->
              <div class="RentMyInputGroup RentMyFullwidth sm:col-span-2 flex flex-col gap-1" data-rentmyattr="NameOnCardDiv">
                <label class="text-xs font-medium text-[var(--brand-text-muted)]">Name on Card</label>
                <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Name on Card" data-rentmyattr="NameOnCard" />
              </div>

              <!-- Card number -->
              <div class="RentMyInputGroup RentMyFullwidth RentMyCardNumber sm:col-span-2 flex flex-col gap-1" data-rentmyattr="CardNumberDiv">
                <label class="text-xs font-medium text-[var(--brand-text-muted)]">Card Number</label>
                <div class="relative">
                  <input type="text" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 pr-14 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="0000 0000 0000 0000" data-rentmyattr="CardNumber" />
                  <img class="RentMyCardImage absolute right-3 top-1/2 -translate-y-1/2 h-6 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SXej1Bug97wHfEFrPIvMj4RG5ov0OKeb2g&s">
                </div>
              </div>

              <!-- Expiry month -->
              <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1" data-rentmyattr="ExpirationDateMonthDiv">
                <label class="text-xs font-medium text-[var(--brand-text-muted)]">Expiry Month</label>
                <select class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition" data-rentmyattr="ExpirationDateMonth">
                  <option value="">Month</option>
                </select>
              </div>

              <!-- Expiry year -->
              <div class="RentMyInputGroup RentMyHalfwidth flex flex-col gap-1" data-rentmyattr="ExpirationDateYearDiv">
                <label class="text-xs font-medium text-[var(--brand-text-muted)]">Expiry Year</label>
                <select class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] transition" data-rentmyattr="ExpirationDateYear">
                  <option value="">Year</option>
                </select>
              </div>

              <!-- CVV -->
              <div class="RentMyInputGroup RentMyFullwidth sm:col-span-2 flex flex-col gap-1" data-rentmyattr="CVVNumberDiv">
                <label class="text-xs font-medium text-[var(--brand-text-muted)]">CVV Number</label>
                <input type="number" class="RentMyInputField w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition sm:max-w-[160px]" placeholder="CVV" data-rentmyattr="CVVNumber" />
              </div>

              <!-- Buttons -->
              <div class="RentMyButtonGroup RentMyNotBetween sm:col-span-2 flex gap-3" data-rentmyattr="ButtonDiv">
                <button type="button" class="RentMyBtn RentMySubmitBtn bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors" data-rentmyattr="CardFormSubmitBtn">Submit</button>
                <button type="button" class="RentMyBtn RentMyNoteCancelBtn border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] text-sm font-medium rounded-xl px-5 py-2.5 transition-colors" data-rentmyattr="CardFormCancelBtn">Cancel</button>
              </div>

            </div>
          </div>

          <!-- Saved cards -->
          <div class="card-description-area" data-rentmyattr="CardDescriptionArea">
            <p class="rentMyDescription text-sm text-[var(--brand-text-muted)] mb-4 leading-relaxed">
              Please enter your preferred payment method below. You can use a credit / debit card.
              Cards will be charged either at the end of the month or end of the billing period.
              All major credit / debit cards accepted.
            </p>

            <div class="rentMyCardNumber flex items-center justify-between gap-4 bg-[var(--brand-surface)] border border-[var(--brand-border)] rounded-xl px-4 py-3" data-rentmyattr="CardList">
              <span class="text-sm font-mono font-medium text-[var(--brand-text)]" data-rentmyattr="CardNumber">xxx–9340</span>
              <div class="card-actions flex items-center gap-2">
                <span class="default-badge text-xs font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)] px-2 py-0.5 rounded-full" data-rentmyattr="CardBadge">Default</span>
                <button class="btn btn-sm btn-outline-primary set-default-btn text-xs border border-[var(--brand-border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] text-[var(--brand-text-muted)] rounded-lg px-3 py-1.5 transition-colors" data-rentmyattr="CardSetDefaultBtn">Set Default</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>
', "status" => 1],
            ["slug" => "contact", "name" => "Contact", "contents" => '<div class="RentMyContactUsWrapper RentMyWrapper min-h-screen bg-[var(--brand-surface)] px-4 py-10">

  <div class="max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-8 items-start">

    <!-- Form card -->
    <div class="paragraph-content-body w-full lg:flex-1 bg-white rounded-2xl shadow-sm border border-[var(--brand-border)] px-6 py-8 sm:px-10">

      <div class="mb-6">
        <h2 class="text-2xl font-bold text-[var(--brand-text)]">Contact us</h2>
        <p class="mt-1 text-sm text-[var(--brand-text-muted)]">We\'d love to hear from you. Fill in the form and we\'ll be in touch.</p>
      </div>

      <form class="mt-4" novalidate>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">

          <!-- First name -->
          <div class="flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">First name</label>
            <input data-rentmyattr="first_name" type="text" class="form-control w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="First name" />
          </div>

          <!-- Last name -->
          <div class="flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Last name</label>
            <input data-rentmyattr="last_name" type="text" class="form-control w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Last name" />
          </div>

          <!-- Phone -->
          <div class="flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Phone</label>
            <input data-rentmyattr="phone" type="text" class="form-control w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Phone number" />
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Email</label>
            <input data-rentmyattr="email" type="email" class="form-control w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="you@example.com" />
          </div>

          <!-- Extra field -->
          <div class="flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Extra field</label>
            <input data-rentmyattr="extra_field" type="text" class="form-control w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" />
          </div>

          <!-- Message -->
          <div class="sm:col-span-2 flex flex-col gap-1">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Questions / Comments</label>
            <textarea data-rentmyattr="message" rows="4" class="form-control w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition resize-none" placeholder="Your message..."></textarea>
          </div>

        </div>

        <!-- Captcha -->
        <div class="mt-5 flex flex-col gap-3" data-rentmyattr="CaptchaCodeArea">
          <img src="" alt="Captcha" data-rentmyattr="CaptchaCode" class="RentMyCaptchaImage h-12 object-contain rounded-lg border border-[var(--brand-border)]">
          <div class="flex flex-col gap-1 max-w-[180px]">
            <label class="text-xs font-medium text-[var(--brand-text-muted)]">Answer</label>
            <input data-rentmyattr="answer" type="text" class="form-control w-full border border-[var(--brand-border)] rounded-lg px-3 py-2.5 text-sm bg-[var(--brand-surface)] text-[var(--brand-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-light)] focus:border-[var(--brand-primary)] focus:bg-white transition" placeholder="Enter answer" />
          </div>
        </div>

        <!-- Submit -->
        <div class="mt-6">
          <button data-rentmyattr="submitButton" type="button" class="RentMyBtn RentMyBtnBlack bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white text-sm font-semibold rounded-xl px-6 py-2.5 transition-colors">
            Submit
          </button>
        </div>

      </form>
    </div>

    <!-- Map + dynamic content -->
    <div class="w-full lg:w-80 xl:w-96 flex flex-col gap-4">
      <div id="google_map_id" class="w-full h-72 lg:h-96 rounded-2xl border border-[var(--brand-border)] shadow-sm overflow-hidden bg-[var(--brand-surface)]"></div>
      <!-- <div data-rentmyattr="ContactDynamicContent" class="text-sm text-[var(--brand-text-muted)]"></div> -->
    </div>

  </div>

</div>
', "status" => 1],
            ["slug" => "terms-and-conditions", "name" => "Terms and Conditions", "contents" => '', "status" => 1],
            ["slug" => "not-found", "name" => "Not Found", "contents" => '', "status" => 1],
            ],
        ],
    ],
];
