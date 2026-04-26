import { collection, writeBatch, doc } from 'firebase/firestore';
import { db } from '../firebase';
import type { User, Content } from '../types';

export const seedDatabase = async () => {
  const batch = writeBatch(db);

  // Scholars data
  const scholars: User[] = [
    {
      id: 'scholar-1',
      name: 'Ustadz Ahmad Faris',
      avatar: 'https://i.pravatar.cc/150?u=scholar1',
      role: 'scholar',
      isVerified: true,
      bio: 'Pengajar kitab kuning dan ilmu hadits.',
      education: [
        { institution: 'Universitas Islam Madinah', degree: 'S1 Hadits', year: '2010' },
        { institution: 'Ma\'had Darul Hadits', degree: 'Lulusan', year: '2005' }
      ],
      teachers: [
        { name: 'Syaikh Abdul Muhsin Al-Abbad', relation: 'Guru Utama Hadits' },
        { name: 'Syaikh Prof. Dr. Abdurrazzaq', relation: 'Sanad Kitab Tauhid' }
      ]
    },
    {
      id: 'scholar-2',
      name: 'Ustadz Budi Santoso',
      avatar: 'https://i.pravatar.cc/150?u=scholar2',
      role: 'scholar',
      isVerified: true,
      bio: 'Pakar fiqih muamalah dan ekonomi syariah.',
      education: [
        { institution: 'Universitas Al-Azhar Kairo', degree: 'S1 Fiqih Islam', year: '2012' },
        { institution: 'Universitas Islam Internasional', degree: 'S2 Ekonomi Syariah', year: '2015' }
      ],
      teachers: [
        { name: 'Syaikh Ali Gomaa', relation: 'Guru Fiqih' },
        { name: 'Prof. Dr. Wahbah Az-Zuhaili', relation: 'Rujukan Fiqih Kontemporer' }
      ]
    }
  ];

  // Insert scholars
  scholars.forEach(scholar => {
    const docRef = doc(collection(db, 'users'), scholar.id);
    batch.set(docRef, scholar);
  });

  // Contents data
  const contents: Content[] = [
    {
      id: 'content-1',
      authorId: 'scholar-1',
      title: 'Pentingnya Menuntut Ilmu Agama',
      body: 'Menuntut ilmu agama adalah sebuah kewajiban bagi setiap muslim. Dengan ilmu, kita dapat membedakan mana yang haq dan mana yang bathil. Ilmu juga akan membimbing kita dalam beribadah yang benar kepada Allah Ta\'ala. \n\nBanyak orang yang meremehkan masalah ilmu agama karena mereka lebih mementingkan ilmu dunia. Padahal ilmu dunia hanya bermanfaat untuk kehidupan yang sementara ini, sedangkan ilmu agama akan menjadi bekal kita baik di dunia maupun di akhirat nanti. \n\nOleh karena itu, marilah kita senantiasa meluangkan waktu kita untuk duduk di majelis ilmu, membaca kitab-kitab para ulama, dan bertanya kepada mereka yang ahli di bidangnya. Janganlah kita menjadi orang yang malas dan enggan mencari kebenaran, sebab hal itu akan membawa kita pada kebinasaan di kemudian hari.',
      type: 'article',
      createdAt: new Date().toISOString(),
      likesCount: 150
    },
    {
      id: 'content-2',
      authorId: 'scholar-1',
      title: 'Adab Sebelum Ilmu',
      body: 'Para ulama terdahulu selalu menekankan pentingnya adab sebelum mempelajari ilmu. Adab adalah pembuka pintu ilmu, dengan adab seseorang akan mudah menerima dan memahami ilmu yang disampaikan. \n\nIbnul Mubarak rahimahullah berkata: "Aku mempelajari adab selama tiga puluh tahun, dan aku mempelajari ilmu selama dua puluh tahun. Mereka (para ulama) mempelajari adab sebelum mempelajari ilmu." \n\nTanpa adab, ilmu yang dimiliki seseorang bisa jadi malah menjadi bumerang baginya. Ilmu tersebut bisa membuatnya sombong, merendahkan orang lain, dan merasa dirinya paling benar. Oleh karena itu, mari kita perbaiki adab kita, baik adab kepada Allah, adab kepada Rasulullah, adab kepada guru, maupun adab kepada sesama.',
      type: 'article',
      createdAt: new Date().toISOString(),
      likesCount: 200
    },
    {
      id: 'content-3',
      authorId: 'scholar-2',
      title: 'Mengenal Riba dalam Kehidupan Sehari-hari',
      body: 'Riba adalah salah satu dosa besar yang seringkali dianggap remeh oleh sebagian orang. Padahal, Allah Ta\'ala dengan tegas mengharamkan riba dan menyatakan perang terhadap pelakunya. \n\nDalam kehidupan modern saat ini, praktik riba bisa sangat halus dan menyusup ke berbagai aspek kehidupan, seperti pinjaman online, kartu kredit, KPR konvensional, dan lain sebagainya. \n\nSebagai seorang muslim, kita wajib untuk mempelajari fiqih muamalah agar kita terhindar dari jeratan riba. Kita harus teliti dan berhati-hati dalam setiap transaksi finansial yang kita lakukan. Jika kita ragu apakah suatu transaksi mengandung riba atau tidak, maka tinggalkanlah dan bertanyalah kepada ahli ilmu.',
      type: 'article',
      createdAt: new Date().toISOString(),
      likesCount: 300
    },
    {
      id: 'content-4',
      authorId: 'scholar-2',
      title: 'Panduan Praktis Fiqih Zakat',
      body: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Using body to store URL for now based on current schema
      type: 'ebook',
      createdAt: new Date().toISOString(),
      likesCount: 100
    }
  ];

  // Insert contents
  contents.forEach(content => {
    const docRef = doc(collection(db, 'contents'), content.id);
    batch.set(docRef, content);
  });

  try {
    await batch.commit();
    console.log('Database seeded successfully!');
    alert('Dummy data injected successfully!');
  } catch (error) {
    console.error('Error seeding database: ', error);
    alert('Failed to inject dummy data. Check console for details.');
  }
};
