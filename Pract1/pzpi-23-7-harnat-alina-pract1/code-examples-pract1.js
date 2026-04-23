class Observer {
  update(data) {}
}

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class NewsAgency extends Subject {
  constructor() {
    super();
    this.news = "";
  }

  setNews(news) {
    this.news = news;
    this.notify(news);
  }
}

class NewsReader extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} отримав новину: ${news}`);
  }
}

const newsAgency = new NewsAgency();

const user1 = new NewsReader("Kate");
const user2 = new NewsReader("Kevin");

newsAgency.subscribe(user1);
newsAgency.subscribe(user2);

newsAgency.setNews("New article is available");

newsAgency.unsubscribe(user1);

newsAgency.setNews("One more new article is available");
