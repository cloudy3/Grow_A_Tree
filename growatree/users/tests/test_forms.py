from django.test import TestCase
from ..forms import UserRegisterForm 

class UserTestForms(TestCase):

    def test_user_register_form_is_valid(self):
        form = UserRegisterForm(data={
            'username': 'testuser1',
            'email': 'test1@example.com',
            'password1': '(jnFe42i',
            'password2': '(jnFe42i'
        })
        self.assertTrue(form.is_valid())
    
    def test_user_register_form_no_data(self):
        form = UserRegisterForm(data={})

        self.assertFalse(form.is_valid())
        self.assertEquals(len(form.errors), 4)