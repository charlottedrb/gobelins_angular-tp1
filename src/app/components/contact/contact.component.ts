import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DOCUMENT} from "@angular/common";
import 'bootstrap'

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup
    submitted: boolean
    sent: boolean

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.sent = false
    }

    ngOnInit(): void {
        this.initForm()
    }

    private initForm(): void {
        this.contactForm = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.email, Validators.required]),
            subject: new FormControl(null, [Validators.required]),
            comments: new FormControl(null, [Validators.required])
        })
    }

    public submitForm() {
        console.log(this.contactForm.controls)
        this.submitted = true

        if (this.contactForm.invalid) {
            return
        }

        this.showConfirmationMessage()
    }

    public resetForm() {
        this.sent = false
        this.submitted = false
        this.contactForm.reset()
    }

    public showConfirmationMessage() {
        this.sent = true
    }
}
