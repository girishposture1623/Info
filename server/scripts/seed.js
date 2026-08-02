const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Room = require('../src/models/Room');
const User = require('../src/models/User');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/hotel');
  await Room.deleteMany();
  await User.deleteMany();

  const rooms = await Room.create([
    { title: 'Standard Room', description: 'Cozy & comfortable', price: 80, capacity: 2, photos: ['https://picsum.photos/seed/1/800/600'], amenities: ['WiFi','TV'] },
    { title: 'Deluxe Room', description: 'Spacious with sea view', price: 150, capacity: 3, photos: ['https://picsum.photos/seed/2/800/600'], amenities: ['WiFi','TV','Mini Bar'] }
  ]);
  await User.create({ name: 'Admin', email: 'admin@example.com', password: 'admin' });

  console.log('Seed done');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
