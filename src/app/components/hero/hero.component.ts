import { Component, Output, EventEmitter } from "@angular/core";
import { User } from "src/app/shared/tax";

interface FormInput {
  id: string;
  label: string;
  tooltip: string;
  maxLength: number;
  value?: number;
  showTooltip?: boolean;
}

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent {
  @Output()
  user = new EventEmitter<User>();

  fields: FormInput[] = [
    {
      id: "income",
      label: "Salaris",
      tooltip: "Vul uw bruto maandsalaris in",
      maxLength: 5,
    },
    {
      id: "age",
      label: "Leeftijd",
      tooltip: "Vul uw leeftijd in",
      maxLength: 3,
    },
  ];

  public submit(): void {
    this.user.emit({
      income: this.fields[0].value,
      age: this.fields[1].value,
    });
  }
}
