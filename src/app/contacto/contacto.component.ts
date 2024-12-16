import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})

export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ProviderService
  ) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.postContact(this.contactForm.value).subscribe(
        (response) => {
          console.log('Datos enviados con éxito:', response);
          this.contactForm.reset(); // Resetea el formulario tras el envío
        },
        (error) => {
          console.error('Error al enviar datos:', error);
        }
      );
    } else {
      this.contactForm.markAllAsTouched(); // Marca los campos como tocados si no son válidos
    }
  }
}
