import { Injectable } from '@nestjs/common';
import { Invoice } from 'src/invoices/entities/invoice.entity';

@Injectable()
export class InvoiceService {
  private invoices: Invoice[] = [
    {
      id: 'RT3080',
      createdAt: '2021-08-18',
      paymentDue: '2021-08-19',
      description: 'Re-branding',
      paymentTerms: 1,
      clientName: 'Jensen Huang',
      clientEmail: 'jensenh@mail.com',
      status: 'paid',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '106 Kendell Street',
        city: 'Sharrington',
        postCode: 'NR24 5WQ',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Brand Guidelines',
          quantity: 1,
          price: 1800.9,
          total: 1800.9,
        },
      ],
      total: 1800.9,
    },
    {
      id: 'XM9141',
      createdAt: '2021-08-21',
      paymentDue: '2021-09-20',
      description: 'Graphic Design',
      paymentTerms: 30,
      clientName: 'Alex Grim',
      clientEmail: 'alexgrim@mail.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '84 Church Way',
        city: 'Bradford',
        postCode: 'BD1 9PB',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Banner Design',
          quantity: 1,
          price: 156.0,
          total: 156.0,
        },
        {
          name: 'Email Design',
          quantity: 2,
          price: 200.0,
          total: 400.0,
        },
      ],
      total: 556.0,
    },
    {
      id: 'RG0314',
      createdAt: '2021-09-24',
      paymentDue: '2021-10-01',
      description: 'Website Redesign',
      paymentTerms: 7,
      clientName: 'John Morrison',
      clientEmail: 'jm@myco.com',
      status: 'paid',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '79 Dover Road',
        city: 'Westhall',
        postCode: 'IP19 3PF',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Website Redesign',
          quantity: 1,
          price: 14002.33,
          total: 14002.33,
        },
      ],
      total: 14002.33,
    },
    {
      id: 'RT2080',
      createdAt: '2021-10-11',
      paymentDue: '2021-10-12',
      description: 'Logo Concept',
      paymentTerms: 1,
      clientName: 'Alyssa Werner',
      clientEmail: 'alyssa@email.co.uk',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '63 Warwick Road',
        city: 'Carlisle',
        postCode: 'CA20 2TG',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Logo Sketches',
          quantity: 1,
          price: 102.04,
          total: 102.04,
        },
      ],
      total: 102.04,
    },
    {
      id: 'AA1449',
      createdAt: '2021-10-7',
      paymentDue: '2021-10-14',
      description: 'Re-branding',
      paymentTerms: 7,
      clientName: 'Mellisa Clarke',
      clientEmail: 'mellisa.clarke@example.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '46 Abbey Row',
        city: 'Cambridge',
        postCode: 'CB5 6EG',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'New Logo',
          quantity: 1,
          price: 1532.33,
          total: 1532.33,
        },
        {
          name: 'Brand Guidelines',
          quantity: 1,
          price: 2500.0,
          total: 2500.0,
        },
      ],
      total: 4032.33,
    },
    {
      id: 'TY9141',
      createdAt: '2021-10-01',
      paymentDue: '2021-10-31',
      description: 'Landing Page Design',
      paymentTerms: 30,
      clientName: 'Thomas Wayne',
      clientEmail: 'thomas@dc.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '3964  Queens Lane',
        city: 'Gotham',
        postCode: '60457',
        country: 'United States of America',
      },
      items: [
        {
          name: 'Web Design',
          quantity: 1,
          price: 6155.91,
          total: 6155.91,
        },
      ],
      total: 6155.91,
    },
    {
      id: 'FV2353',
      createdAt: '2021-11-05',
      paymentDue: '2021-11-12',
      description: 'Logo Re-design',
      paymentTerms: 7,
      clientName: 'Anita Wainwright',
      clientEmail: '',
      status: 'draft',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      items: [
        {
          name: 'Logo Re-design',
          quantity: 1,
          price: 3102.04,
          total: 3102.04,
        },
      ],
      total: 3102.04,
    },
  ];

  findAll() {
    return this.invoices;
  }

  findOne(id: string) {
    return this.invoices.filter((i) => i.id === id);
  }

  create(payload: any) {
    const newInvoice = {
      id: 'ASD78S5D',
      ...payload,
    };

    this.invoices.push(newInvoice);
    return newInvoice;
  }

  update(id: string, payload: any) {
    const index = this.invoices.findIndex((i) => i.id === id);
    this.invoices[index] = { ...payload };
    return { ...payload };
  }

  delete(id: string) {
    const index = this.invoices.findIndex((i) => i.id === id);
    this.invoices.splice(index, 1);
  }
}
