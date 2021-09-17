'use strict';
const { Product } = require('fabric-contract-api');

class testProduct extends Product {

  async addProducts(ctx, productId) {
    let products = {
      prod1: product1,
      prod2: product2,
      prod3: product3
    };

    await ctx.stub.putState(productId, Buffer.from(JSON.stringify(products)));

    console.log('Products added To the ledger Succesfully..');
  }

  async viewProducts(ctx, productId) {
    let productsAsBytes = await ctx.stub.getState(productId);
    if (!productsAsBytes || productsAsBytes.toString().length <= 0) {
      throw new Error('Product with this Id does not exist: ');
    }
    let products = JSON.parse(productsAsBytes.toString());

    return JSON.stringify(products);
  }

  async deleteProducts(ctx, productId) {
    await ctx.stub.deleteState(productId);

    console.log('Products deleted from the ledger Succesfully..');
    
  }

  //  async queryMarks(ctx,studentId) {
   
  //   let marksAsBytes = await ctx.stub.getState(studentId); 
  //   if (!marksAsBytes || marksAsBytes.toString().length <= 0) {
  //     throw new Error('Student with this Id does not exist: ');
  //      }
  //     let marks=JSON.parse(marksAsBytes.toString());
      
  //     return JSON.stringify(marks);
  //    }

  //  async addMarks(ctx,studentId,subject1,subject2,subject3) {
   
  //   let marks={
  //      subj1:subject1,
  //      subj2:subject2,
  //      subj3:subject3
  //      };

  //   await ctx.stub.putState(studentId,Buffer.from(JSON.stringify(marks))); 
    
  //   console.log('Student Marks added To the ledger Succesfully..');
    
  // }

  //  async deleteMarks(ctx,studentId) {
   

  //   await ctx.stub.deleteState(studentId); 
    
  //   console.log('Student Marks deleted from the ledger Succesfully..');
    
  //   }
}

module.exports = testProduct;
