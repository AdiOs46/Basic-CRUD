import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument>) {}

  async insertCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const newCustomer = new this.customerModel(createCustomerDto);
    return newCustomer.save();
  }

  async getCustomer(username: string): Promise<Customer> {
    const customer = await this.customerModel.findOne({ username }).exec();
    if (!customer) {
      throw new NotFoundException(`Customer with username ${username} not found`);
    }
    return customer;
  }

  async updateCustomer(username: string, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const existingCustomer = await this.customerModel.findOneAndUpdate({ username }, updateCustomerDto, { new: true }).exec();
    if (!existingCustomer) {
      throw new NotFoundException(`Customer with username ${username} not found`);
    }
    return existingCustomer;
  }

  async deleteCustomer(username: string): Promise<Customer> {
    const deletedCustomer = await this.customerModel.findOneAndDelete({ username }).exec();
    if (!deletedCustomer) {
      throw new NotFoundException(`Customer with username ${username} not found`);
    }
    return deletedCustomer;
  }
}
