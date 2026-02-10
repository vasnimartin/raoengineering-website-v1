import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found-page">
      <div class="container">
        <div class="error-content">
          <h1 class="error-code">404</h1>
          <h2 class="error-title">Page Not <span class="text-gold">Found</span></h2>
          <p class="error-message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div class="error-actions">
            <a routerLink="/" class="btn-primary">Go Home</a>
            <a routerLink="/contact" class="btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(rgba(11, 28, 62, 0.95), rgba(11, 28, 62, 0.9)), url('/assets/images/heroes/hero_main.png');
      background-size: cover;
      background-position: center;
      padding: 2rem;
    }

    .error-content {
      text-align: center;
      max-width: 600px;
    }

    .error-code {
      font-size: 10rem;
      font-weight: 900;
      color: var(--color-accent-gold);
      line-height: 1;
      margin-bottom: 1rem;
      text-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
    }

    .error-title {
      font-size: 3rem;
      color: var(--color-text-white);
      margin-bottom: 1rem;
    }

    .error-message {
      font-size: 1.25rem;
      color: var(--color-text-light);
      margin-bottom: 3rem;
      line-height: 1.6;
    }

    .error-actions {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-outline {
      padding: 1rem 2.5rem;
      font-family: var(--font-heading);
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .btn-primary {
      background: var(--color-accent-orange);
      color: var(--color-text-white);
      border: none;
    }

    .btn-primary:hover {
      background: #e04400;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 77, 0, 0.4);
    }

    .btn-outline {
      background: transparent;
      border: 2px solid var(--color-text-white);
      color: var(--color-text-white);
    }

    .btn-outline:hover {
      background: var(--color-text-white);
      color: var(--color-primary-navy);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .error-code {
        font-size: 6rem;
      }

      .error-title {
        font-size: 2rem;
      }

      .error-message {
        font-size: 1rem;
      }
    }
  `]
})
export class NotFoundComponent {}
