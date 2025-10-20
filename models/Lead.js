// Simple in-memory storage (replace with DB if needed)
const leads = [];

export default class Lead {
  constructor({ name, email, phone, product, zip }) {
    this.id = leads.length + 1;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.product = product;
    this.zip = zip;
    this.createdAt = new Date();
  }

  static create(data) {
    const newLead = new Lead(data);
    leads.push(newLead);
    return newLead;
  }

  static all() {
    return leads;
  }
}
