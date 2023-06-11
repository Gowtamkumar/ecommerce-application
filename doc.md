## User: Represents the users of the eCommerce application.

User ID (primary key)
Name
Email
Password (encrypted)
Phone number
Registration date
Address ID (foreign key)

## Address: Represents the addresses associated with users.

Address ID (primary key)
User ID (foreign key)
Address line 1
Address line 2
City
State
Postal code

## Payment Method: Represents the payment methods associated with users.

Payment Method ID (primary key)
User ID (foreign key)
Payment method type (credit card, PayPal, etc.)
Payment method details

## Category: Represents the categories or types of products.

Category ID (primary key)
Name
Description

## Product: Represents the products available for sale.

Product ID (primary key)
Name
Description
Price
Category ID (foreign key)
Image URL
Stock quantity

## ProductVariant: Represents different variations/options for a product (e.g., size, color)

Variant ID (primary key)
Product ID (foreign key)
Variant name (e.g., "Size", "Color")
Variant value (e.g., "Small", "Blue")

## Order: Represents the purchase orders placed by customers.

Order ID (primary key)
User ID (foreign key)
Order date
Total amount

## OrderItem: Represents individual items within an order.

Order Item ID (primary key)
Order ID (foreign key)
Product ID (foreign key)
Variant ID (foreign key, if applicable)
Quantity
Price

## Cart: Represents the shopping cart for each user.

Cart ID (primary key)
User ID (foreign key)

## Review: Represents product reviews left by users.

Review ID (primary key)
User ID (foreign key)
Product ID (foreign key)
Rating
Comment

## Promotion: Represents promotional offers or discounts.

Promotion ID (primary key)
Name
Description
Discount percentage
Start date
End date

## Wishlist: Represents user-specific wishlists.

Wishlist ID (primary key)
User ID (foreign key)
Product ID (foreign key)
