import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('host', 'Unit | Model | host', {
  needs: ['model:home', 'ember-validations@validator:local/presence'],
  unit: true
});

test('home relationship', function(assert) {
  let Host = this.store().modelFor('host');
  let relationship = Ember.get(Host, 'relationshipsByName').get('homes');

  assert.equal(relationship.key, 'homes');
  assert.equal(relationship.kind, 'hasMany');
});

test('firstName should be required', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('firstName', '');
  });

  assert.equal(model.get('isValid'), false, 'Host is valid without a first name');
});

test('lastName should be required', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('lastName', '');
  });

  assert.equal(model.get('isValid'), false, 'Host is valid without a last name');
});

test('marital status should be required', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('married', '');
  });

  assert.equal(model.get('isValid'), false, 'Host is valid without a marital status');
});

test('should be either married or not', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('married', null);
  });

  assert.equal(model.get('isValid'), false, 'Host is valid with unknown marital status');
});

test('phone numbers should be required', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('phoneNumbers', []);
  });

  assert.equal(model.get('isValid'), false, 'Host is valid without any phone numbers');
});

test('photo should be required', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('photo', '');
  });

  assert.equal(model.get('isValid'), false, 'Host is valid without a photo');
});

test('photo should be base64-encoded JPEG', function(assert) {
  const model = this.subject();
  const pngbase64 = "data:image/png;base64,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AACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABiQAACAAQkAABjQaYcPH+49w9Zorf2dJLdLcmaSM5Zfj76dcdTX0zqNOQUPSfKo3kPAhLwhye/3HqKzw0kOLW/XnODrF6rqc90m3DICYI9aa9+V5HuTfNsOt9t0HA1gBF9O8tHl7WNH/fO7qupTvYaaIwGwC62185I8enn77s7jAHBT1yf5H0l+O8mbqurzfceZPgFwEq21hyd5YZJ79p4FgF27LskfJXlGVX249zBTJQBOoLX2q0ku7D0HAPv2lSQ/VVVv6D3IFAmAHbTWHpXk9b3nAODAvpbk+6vqz3sPMjXeBrizZ/YeAICVuFWS5/YeYoqcAByntXaLLI6NbtF7FgBW4stJbltVN/QeZEqcABynqq5L4k4CsD2+MYvrDHAUAbCzj/YeAICV+UpVCYDjCICd/dfeAwCwMv+t9wBTJAB29htJruo9BAAr8Zu9B5giAbCDqvpSkpf3ngOAA/tQVb2z9xBTJABO7KVJru09BAAH4rf/ExAAJ1BVf5PkVb3nAGDfvpLk4t5DTJUAOLlnJrm89xAA7MvP+fjgE3MhoFNord0zyZ8muWXvWQDYtddX1aN7DzFlTgBOoao+mOSpvecAYNc+nuRneg8xdQJgF6rqFfF6AIA5uCHJ46vqi70HmToBsHtPSfKXvYcA4KR+uare1XuIORAAu1RVX03yqCRX954FgB29J8kv9h5iLgTAHlTVpUkek+S63rMAcIyPJ3l0VX299yBzIQD2qKp+P8kT4xMDAabiM0keWFWf6D3InAiAfaiq1yb5573nACBXJfmx5QkteyAA9qmqfiPJs3vPATCwa5I8rKre33uQORIAB1BVFyX51d5zAAzo60kuqKr/2XuQuXIlwBVorb08LjoBsCmHk/xUVbnO/wE4AViNJyf5nd5DAAziGZb/wQmAFaiqG5L8ZJI/6D0LwJb7pap6ae8htoGnAFaotXarJG9Jcn7vWQC20Eur6um9h9gWTgBWqKq+luShSS7pPQvAlrH8V0wArNjyksEiAGB1LP81EABrIAIAVsbyXxMBsCYiAODALP81EgBrJAIA9s3yXzMBsGYiAGDPLP8NEAAbIAIAds3y3xABsCEiAOCULP8NEgAbJAIATsjy3zABsGEiAOAmLP8OBEAHIgDgRpZ/JwKgExEAYPn3JAA6EgHAwCz/zgRAZyIAGJDlPwECYAJEADAQy38iBMBEiABgAJb/hAiACREBwBaz/CdGAEyMCAC2kOU/QQJggkQAsEUs/4kSABMlAoAtYPlPmACYMBEAzJjlP3ECYOJEADBDlv8MCIAZEAHAjFj+MyEAZkIEADNg+c+IAJgREQBMmOU/MwJgZkQAMEGW/wwJgBkSAcCEWP4zJQBmSgQAE2D5z5gAmDERAHRk+c+cAJg5EQB0YPlvAQGwBUQAsEGW/5YQAFtCBAAbYPlvEQGwRUQAsEaW/5YRAFtGBABrYPlvIQGwhUQAsEKW/5YSAFtKBAArYPlvMQGwxUQAcACW/5YTAFtOBAD7YPkPQAAMQAQAe2D5D0IADEIEALtg+Q9EAAxEBAAnYfkPRgAMRgQAO7D8ByQABiQCgKNY/oMSAIMSAUAs/6EJgIGJABia5T84ATA4EQBDsvwRAIgAGIzlTxIBwJIIgCFY/txIAHAjEQBbzfLnGAKAY4gA2EqWPzchALgJEQBbxfJnRwKAHYkA2AqWPyckADghEQCzZvlzUgKAkxIBMEuWP6ckADglEQCzYvmzKwKAXREBMAuWP7smANg1EQCTZvmzJwKAPREBMEmWP3smANgzEQCTYvmzLwKAfREBMAmWP/smANg3EQBdWf4ciADgQEQAdGH5c2ACgAMTAbBRlj8rIQBYCREAG2H5szICgJURAbBWlj8rJQBYKREAa2H5s3ICgJUTAbBSlj9rIQBYCxEAK2H5szYCgLURAXAglj9rJQBYKxEA+2L5s3YCgLUTAbAnlj8bIQDYCBEAu2L5szECgI0RAXBSlj8bJQDYKBEAO7L82TgBwMaJADiG5U8XAoAuRAAksfzpSADQjQhgcJY/XQkAuhIBDMrypzsBQHcigMFY/kyCAGASRACDsPyZDAHAZIgAtpzlz6QIACZFBLClLH8mRwAwOSKALWP5M0kCgEkSAWwJy5/JEgBMlghg5ix/Jk0AMGkigJmy/Jk8AcDkiQBmxvJnFgQAsyACmAnLn9kQAMyGCGDiLH9mRQAwKyKAibL8mR0BwOyIACbG8meWBACzJAKYCMuf2RIAzJYIoDPLn1kTAMyaCKATy5/ZEwDMnghgwyx/toIAYCuIADbE8mdrCAC2hghgzSx/tooAYKuIANbE8mfrCAC2jghgxSx/tpIAYCuJAFbE8mdrCQC2lgjggCx/tpoAYKuJAPbJ8mfrCQC2nghgjyx/hiAAGIIIYJcsf4YhABiGCOAULH+GIgAYigjgBCx/hiMAGI4I4DiWP0MSAAxJBLBk+TMsAcCwRMDwLH+GJgAYmggYluXP8AQAwxMBw7H8IQIAkoiAgVj+sCQAYEkEbD3LH44iAOAoImBrWf5wHAEAxxEBW8fyhx0IANiBCNgalj+cgACAExABs2f5w0kIADgJETBblj+cggCAUxABs2P5wy4IANgFETAblj/skgCAXRIBk2f5wx4IANgDETBZlj/skQCAPRIBk2P5wz4IANgHETAZlj/skwCAfRIB3Vn+cAACAA5ABHRj+cMBCQA4IBGwcZY/rIAAgBUQARtj+cOKnHaf+9znQ72HOIlnV9Xv9h4Cdqu1dusk/z3J+b1n2UKWP7PSWntkkn/de44TuXmS83oPcRK37T0A7EVVfbW19uNJ3pzkR3rPs0VeUlXP7D0E7NFtM+Ed6ykAWLGq+loWTwe8rfcsW+LFlj+sngCANaiqa5I8PMkf9p5l5i6qqn/RewjYRgIA1mQZAY9I8tbes8zUL1fVs3sPAdtKAMAaVdWhJI9M8pbes8zMi6rqub2HgG0mAGDNquraJD+RxQsDObUXVNW/6j0EbDsBABuwjIBHJfG21pN7XlW9sPcQMAIBABtSVdcluSDJG3vPMlHPqapf6j0EjEIAwAYtI+CfJHl971km5llVNdkLpsA2EgCwYVX19SSPSfI7vWeZiAur6t/0HgJGIwCgg6q6Psnjkrym9yydPaOq/m3vIWBEAgA6WUbAE5L8Vu9ZOvn5qvq13kPAqAQAdLSMgCcmeVXvWTbsaVX173oPASMTANBZVd2Q5KeTvLL3LBtwOMlTqurXew8CoxMAMAHLCHhSkhf3nmWNrkvy+Kp6We9BAAEAk1FVh5cffPP0LH5T3iZXJ3lIVY3+okeYDAEAE1NVL83iHQLX9p5lRT6V5Ier6u29BwH+lgCACaqq1yZ5SBa/Oc/ZFUnuV1Xv7z0IcCwBABNVVe9I8g+y+A16jt6X5Aeq6oregwA3JQBgwqrqA0l+IMnlvWfZo7dncez/6d6DADsTADBxVfWRLCKges+yS6/O4gV/X+49CHBiAgBmoKo+k+T+Sf6o9yyn8JIkP7n80CNgwgQAzMTyN+qHZpqXDj6c5JlV9cyq2ra3MMJWEgAwI8vfrJ+QZEofoHPkAj8v6T0IsHsCAGZmecGgC7O4VkDvtwl+LMnfd4EfmB8BADO1XLr3SfKBTiO8Kcm9qupPO/184AAEAMxYVX04yX2TbPLDdQ4leWpV/URVfXGDPxdYIQEAM1dVh6rqaUkekeQTa/5xH0jy/VX1H9f8c4A1EwCwJarq95Kcl+QXk3xtxd/+k1l8WmGrqj9b8fcGOhAAsEWq6qtV9fwkd0/y2yv4loeSXJTkblX1iuXHFgNb4Oa9BwBWr6o+nuQxrbUXZvG2wccn+dY9fIu/SHJxkt+qqk+uYUSgMwEAW6yqPpTkOa2152ZxJcFHJLlrkjsnuVOSM5J8OYu38300yV8lea1jfth+AgAGsDy6/+PlLUnSWjs9yVlV9aVugwHdCAAY1DIKLH8YlBcBAsCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADEgAAMCABAAADOj0JId6D3ESt+k9AADs05R32KHTk1zde4qTOLf3AACwT1PeYVdPPQC+pfcAALBPU95hV5+e5KreU5zElOsJAE5myjvsqqmfALTW2pm9hwCAvVjurtZ7jpOY/FMAZyV5QO8hAGCPHpDFDpuqq09PcmXvKU7hEb0HAIA9mvruuvL0JJf1nuIUHu5pAADmYrmzHt57jlO47PQkl/ae4hRun+TJvYcAgF16cha7a8ouncMJQJL8QmttyhdUAIAsd9Uv9J5jFy47PclHklzfe5JTOCfJhb2HAIBTuDCLnTVl1yf5yGmHDx9Oa+3DSe7Se6JTuDbJj1TVu3oPAgDHa639UJJ3JDmj9yyncHlV3fXIhwG9p+sou3NGkje21u7UexAAONpyN70x01/+yXLnHwmASzoOshffnOTNrbUpv7cSgIEsd9Kbs9hRc3BJMr8ASJJ7JHm3kwAAelvuondnsZvm4m8DoKo+nuSKruPszT2SvHf5fAsAbNxyB70381r+Vyx3/o0nAMm8TgGSxVHLO1prL/KUAACb0lo7q7X2oixe8DeXY/8jbtz1RwfA2zoMclBnJHlukitaa09rrd2i90AAbKfW2i1aa0/L4sT8uZnHC/6Od+OuP+3w4cNJktbaLZN8MsltOw21Cp9M8nvL2yVVdajzPADM2PKyvudncWnfhye5Y9+JDuRLSe5YVdckRwVAkrTWfjPJP+s02KpdnaSy+LCjv1l+varrRABM3W2SnJvkW5ZfW6b9qX578Z+r6meO/MvNj/sfX5XtCYCzkty/9xAAMBGvOvpfjjkBSJLW2uVJvnOTEwEAa3VFVR1zxd/Td/iPLt7QMADAZtxkt+8UAC9Pcs36ZwEANuCaLHb7MW4SAFX1qSSv2MREAMDavWK524+x0wlAkrw4yXXrnQcAWLPrstjpN7FjAFTVx5K8ep0TAQBr9+rlTr+JE50AJMlFSW5YzzwAwJrdkMUu39EJA6CqLk3yynVMBACs3SuXu3xHJzsBSJJnJfncaucBANbsc1ns8BM6aQBU1Sm/AQAwOc9a7vATOtUJQLJ4S+B7VjMPALBm78ku3s5/k0sB76S1ds8k70tys4PPBQCsyfVJ7lNVHzzVf7ibE4Asv9ELDjgUALBeL9jN8k92GQBLv5LkHfubBwBYs3dksat3ZVdPARzRWrtDkj9Lcse9zwUArMknk9xrp0v+nsheTgCOfE7AY+MCQQAwFTckeexeln+yxwBIkqr6kyTP2+ufAwDW4nnL3bwne3oK4Gittf+U5Mn7+sMAwCq8rKqesp8/uOcTgKM8NckbDvDnAYD9e0MWu3hf9n0CkCSttTOTvDXJ+fv+JgDAXl2S5MFVdWi/3+BAAZAkrbWzloO0A30jAGA3Ksn5VXX1Qb7JQZ4CWEyxGOD8LCIAAFifS7KC5Z+sIACSGyPgwfGaAABYlzdkcex/4OWfrCgAkmT5PMQFSV62qu8JACRZ7NYLDvKc//EO/BqAnbTWnpPkRVlhYADAgG7I4n3+u77E726tJQCSpLV2/ySvicsGA8B+fDKLK/zt+SI/u7G239CXA98rPkAIAPbqHVlc238tyz9Z8xH98rrEP5rFpYOvX+fPAoAtcH0WO/NH93pt/71a21MAx2ut3TOLFzHcdyM/EADm5T1JnlxVH9zED9vYi/SW/4ful+RJST63qZ8LABP3uSx24/02tfyTDZ4AHK21drskFyX56XinAABjuiHJK5M8q6o2/otxlwA4orV2XpJnJXlcklt0GwQANue6JK9OclFVXdpriK4BcERr7duTXJjknya5ZedxAGAdrknyiiQvrqqP9R5mEgFwRGvtDkl+NskTknxn53EAYBWuSHJxkpev+5X9ezGpADhaa+1+SZ6Y5NFJbtt5HADYiy8leV2SV1XVu3sPs5PJBsARrbVbJvnxJA/M4lMHnQwAMEVXZPFpfW9L8paquqbzPCc1+QA4Xmvt27IIgfOzuKbAnZPcrOtQAIzm+iR/ncV79y9JcklVfbzvSHszuwA4XmvtjCTfkeRuSc5bfj03yVnL222O+uczO40JwDwcSnL18nbVUf98ZZLLkly6/PqRqrq215Cr8P8BxwLcQrIv28sAAAAASUVORK5CYII=";

  Ember.run(function() {
    model.set('photo', pngbase64);
  });

  assert.equal(model.get('isValid'), false, 'Host is valid with a non-JPEG image');
});

test('should correctly form fullName', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('title', 'Mrs.');
    model.set('firstName', 'Agnes');
    model.set('lastName', 'Oduro');
  });

  assert.equal(model.get('fullName'), 'Mrs. Agnes Oduro');
});

test('spouseFullName is host is married', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('title', 'Mrs.');
    model.set('firstName', 'Agnes');
    model.set('lastName', 'Oduro');
    model.set('married', true);
    model.set('spouseTitle', 'Mr.');
    model.set('spouseFirstName', 'Thomas');
    model.set('spouseLastName', 'Oduro');
  });

  assert.equal(model.get('spouseFullName'), 'Mr. Thomas Oduro');
});

test('homeLabelName should be first name of unmarried host', function(assert) {
  const model = this.subject();
  Ember.run(() => {
    model.set('title', 'Mrs.');
    model.set('firstName', 'Agnes');
    model.set('lastName', 'Oduro');
  });

  assert.equal(model.get('homeLabelName'), 'Agnes');
});

test('homeLabelName should be first name of married couple', function(assert) {
  const model = this.subject();
  Ember.run(() => {
    model.set('title', 'Mrs.');
    model.set('firstName', 'Agnes');
    model.set('lastName', 'Oduro');
    model.set('married', true);
    model.set('spouseTitle', 'Mr.');
    model.set('spouseFirstName', 'Thomas');
    model.set('spouseLastName', 'Oduro');
  });

  assert.equal(model.get('homeLabelName'), 'Agnes & Thomas');
});
