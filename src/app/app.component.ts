import {Component} from '@angular/core';

export class Person {
    id: number;
    name: string;
    surname: string;
    age: number;
    university: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    headers = [
        {
            key: 'name',
            title: 'name'
        },
        {
            key: 'surname',
            title: 'surname'
        },
        {
            key: 'age',
            title: 'age'
        },
        {
            key: 'university',
            title: 'university'
        },
        {
            key: 'description',
            title: 'description'
        },
    ];

    listOfData = [
        {
            id: 1,
            name: 'John',
            surname: 'Brown',
            age: 32,
            university: 'Oxford',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            id: 2,
            name: 'John',
            surname: 'Brown',
            age: 32,
            university: 'Cambridge',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            id: 3,
            name: 'John',
            surname: 'Brown',
            age: 32,
            university: 'MIT',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
    ];

}
