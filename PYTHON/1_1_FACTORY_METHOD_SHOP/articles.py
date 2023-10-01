import uuid

class Article(object):
    def __init__(self, id, price, title, author):
        self.id = uuid.uuid4()
        self.price = price
        self.title = title
        self.author = author
    def __str__(self):
        return self.title
    
class Download(Article):
    def __init__(self, price, title, author, available, url):
        super().__init__(self, price, title, author)
        self.available = available
        self.url = url
    def discontinue(self):
        self.available = False
    def sell(self):
        if (self.available):
            return {"name": self.title, "license": uuid.uuid4(), "url": self.url}
        else:
            raise Exception("Download not available")


class PaperBook(Article):
    def __init__(self, price, title, author, stock, weight):
        super().__init__(self, price, title, author)
        self.stock = stock
        self.weight = weight
    def sell(self, quantity):
        if self.stock >= quantity:
            self.stock -= quantity
            order = {"articleId": self.id, "quantity": quantity, "totalPrice": self.price * quantity}
            return order
        else:
            raise Exception(f"Only {self.stock} {self.title}s available, please amend your order.")
        
book = PaperBook(30, "Alice in Wonderland", "Lewis Caroll", 3, 3)
download = Download(40, "Alice in Wonderland", "Lewis Caroll", True, "https://booksonline.de")
print(book.sell(2))
print(download.sell())
download.discontinue()
download.sell()