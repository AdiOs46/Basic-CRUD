import { Body, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto, UpdateCustomerDto, ReadCustomerDto, DeleteCustomerDto } from './dto/customer.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a customer' })
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.insertCustomer(createCustomerDto);
  }

  @Get(':username')
  @ApiOperation({ summary: 'Get a customer by username' })
  async getCustomer(@Param('username') username: string) {
    return this.customerService.getCustomer(username);
  }

  @Put(':username')
  @ApiOperation({ summary: 'Update a customer by username' })
  async updateCustomer(@Param('username') username: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.updateCustomer(username, updateCustomerDto);
  }

  @Delete(':username')
  @ApiOperation({ summary: 'Delete a customer by username' })
  async deleteCustomer(@Param('username') username: string) {
    return this.customerService.deleteCustomer(username);
  }
}
