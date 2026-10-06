import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // أو styles.css حسب اسم الملف عندك
})
export class HomeComponent implements OnInit, OnDestroy {
  // 1. بيانات العداد
  startDate = new Date('2023-05-15T00:00:00').getTime();
  timeElapsed: any = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  timer: any;

  // 2. الجوابات السرية
  letters = [
    { title: 'رسالة رقم ١', content: 'كل يوم بيعدي وأنا معاك هو أجمل يوم في حياتي.', isOpen: false },
    { title: 'وعد مني', content: 'أوعدك أفضل جنبك وندعم بعض دايماً في كل خطوة.', isOpen: false },
    { title: 'عارف إيه أحلى حاجة؟', content: 'إننا مش بس مرتبطين، إحنا صحاب وسند لبعض، بحبك!', isOpen: false }
  ];

  // 3. المفضلات
  isPlaying = false;
  showMovie = false;
  audio: any;

  // 4. برطمان السعادة
  reasons = [
    'عشان بتفهمني من نظرة',
    'عشان ضحكتك بتغير مودي',
    'عشان دايمًا بتشجعني أكون أحسن',
    'عشان وجودك هو الأمان بالنسبالي'
  ];
  currentReason = '';

  // 5. عجلة الخروجات
  options = ['سينما 🍿', 'أكلة حلوة 🍕', 'تمشية ع النيل 🌊', 'كافيه هادي ☕'];
  selectedOption = '';
  isSpinning = false;

  // 6. قائمة الأحلام
  bucketList = [
    { text: 'نسافر نغير جو في مكان جديد', done: false },
    { text: 'نعمل عمرة سوا', done: false },
    { text: 'نفتح بيتنا الصغير بسلام', done: true }
  ];

  // 7. الذكريات
  memories = [
    { date: '١٥ مايو ٢٠٢٣', title: 'أول لقاء', mediaUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500', mediaType: 'image', revealed: false, animating: false },
    { date: 'فبراير ٢٠٢٤', title: 'فيديو خاص', mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', mediaType: 'video', revealed: false, animating: false }
  ];

  // 8. مودال المصالحة
  showSorryModal = false;
  escapeStyle = {};

  ngOnInit() {
    // العداد بيكمل عد
    this.recalculateTime(); 
    this.timer = setInterval(() => this.recalculateTime(), 1000); 

    if (typeof window !== 'undefined') {
      this.audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer); 
    if (this.audio) this.audio.pause();
  }

  recalculateTime() {
    const now = new Date().getTime();
    const distance = now - this.startDate;
    this.timeElapsed = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  toggleSong() { if (this.audio) { this.isPlaying ? this.audio.pause() : this.audio.play(); this.isPlaying = !this.isPlaying; } }
  toggleMovie() { this.showMovie = !this.showMovie; }
  openLetter(i: number) { this.letters[i].isOpen = !this.letters[i].isOpen; }
  revealMemory(i: number) {
      const mem = this.memories[i];
      if (!mem.revealed && !mem.animating) {
        mem.animating = true;
        setTimeout(() => { mem.revealed = true; mem.animating = false; }, 600);
      }
  }
  toggleTask(i: number) { this.bucketList[i].done = !this.bucketList[i].done; }
  getReason() { this.currentReason = this.reasons[Math.floor(Math.random() * this.reasons.length)]; }
  spinWheel() { this.isSpinning = true; this.selectedOption = ''; setTimeout(() => { this.selectedOption = this.options[Math.floor(Math.random() * this.options.length)]; this.isSpinning = false; }, 2000); }
  
  // الدوال الجديدة للمصالحة
  acceptApology() { this.showSorryModal = false; }
  escape() {
    const x = Math.random() * 300 - 150; 
    const y = Math.random() * 300 - 150; 
    this.escapeStyle = { transform: `translate(${x}px, ${y}px)` };
  }
  showCapsuleAlert() { alert('لسه شوية يا بطل.. مفيش غش! ✋'); }
}