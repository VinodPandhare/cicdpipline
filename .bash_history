cls
clear
[200~pip install 'constructs>=10.0.0,<11.0.0' aws-cdk-lib aws-cdk.aws-ec2 aws-cdk.aws-ecs aws-cdk.aws-ecr aws-cdk.aws-iam
~pip install 'constructs>=10.0.0,<11.0.0' aws-cdk-lib aws-cdk.aws-ec2 aws-cdk.aws-ecs aws-cdk.aws-ecr aws-cdk.aws-iam
logout
clear
cd ecs-devops-sandbox-cdk/
cdk deploy
source .env/bin/activate
cd 
source .env/bin/activate
pip list | grep aws-cdk
source .env/bin/activate
python --version  # Check Python version
(.env) ubuntu@ip-172-31-10-214:~$ source .env/bin/activate
python --version  # Check Python version
Python 3.12.3
cd ecs-devops-sandbox-cdk/
cdk deploy
ls
cat app.py 
vi app.py 
cd e
cd ecs_devops_sandbox_cdk/
vi ecs_devops_sandbox_cdk_stack.py 
clear
cd ..
cdk deploy
pip install --upgrade aws-cdk.core
pip uninstall constructs
pip install 'constructs<11.0.0'
pip list | grep aws-cdk
pip uninstall aws-cdk-core aws-cdk.cx-api aws-cdk.region-info
pip install 'aws-cdk-core==2.149.0' 'aws-cdk.cx-api==2.149.0' 'aws-cdk.region-info==2.149.0'
pip list | grep aws-cdk
pip install 'aws-cdk-core==1.204.0' 'aws-cdk.cx-api==1.204.0' 'aws-cdk.region-info==1.204.0'
(.env) ubuntu@ip-172-31-10-214:~/ecs-devops-sandbox-cdk$ pip install 'aws-cdk-core==1.204.0' 'aws-cdk.cx-api==1.204.0' 'aws-cdk.region-info==1.204.0'
Collecting aws-cdk-core==1.204.0
Collecting aws-cdk.cx-api==1.204.0
Collecting aws-cdk.region-info==1.204.0
Requirement already satisfied: aws-cdk.cloud-assembly-schema==1.204.0 in /home/ubuntu/.env/lib/python3.12/site-packages (from aws-cdk-core==1.204.0) (1.204.0)
Collecting constructs<4.0.0,>=3.3.69 (from aws-cdk-core==1.204.0)
Requirement already satisfied: jsii<2.0.0,>=1.84.0 in /home/ubuntu/.env/lib/python3.12/site-packages (from aws-cdk-core==1.204.0) (1.101.0)
Requirement already satisfied: publication>=0.0.3 in /home/ubuntu/.env/lib/python3.12/site-packages (from aws-cdk-core==1.204.0) (0.0.3)
Requirement already satisfied: typeguard~=2.13.3 in /home/ubuntu/.env/lib/python3.12/site-packages (from aws-cdk-core==1.204.0) (2.13.3)
Requirement already satisfied: attrs<24.0,>=21.2 in /home/ubuntu/.env/lib/python3.12/site-packages (from jsii<2.0.0,>=1.84.0->aws-cdk-core==1.204.0) (23.2.0)
Requirement already satisfied: cattrs<23.3,>=1.8 in /home/ubuntu/.env/lib/python3.12/site-packages (from jsii<2.0.0,>=1.84.0->aws-cdk-core==1.204.0) (23.2.3)
Requirement already satisfied: importlib-resources>=5.2.0 in /home/ubuntu/.env/lib/python3.12/site-packages (from jsii<2.0.0,>=1.84.0->aws-cdk-core==1.204.0) (6.4.0)
Requirement already satisfied: python-dateutil in /home/ubuntu/.env/lib/python3.12/site-packages (from jsii<2.0.0,>=1.84.0->aws-cdk-core==1.204.0) (2.9.0.post0)
Requirement already satisfied: typing-extensions<5.0,>=3.8 in /home/ubuntu/.env/lib/python3.12/site-packages (from jsii<2.0.0,>=1.84.0->aws-cdk-core==1.204.0) (4.12.2)
Requirement already satisfied: six>=1.5 in /home/ubuntu/.env/lib/python3.12/site-packages (from python-dateutil->jsii<2.0.0,>=1.84.0->aws-cdk-core==1.204.0) (1.16.0)
Using cached aws_cdk.core-1.204.0-py3-none-any.whl (1.4 MB)
Using cached aws_cdk.cx_api-1.204.0-py3-none-any.whl (171 kB)
Using cached aws_cdk.region_info-1.204.0-py3-none-any.whl (96 kB)
Using cached constructs-3.4.344-py3-none-any.whl (70 kB)
Installing collected packages: constructs, aws-cdk.region-info, aws-cdk.cx-api, aws-cdk-core
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
aws-cdk-lib 2.149.0 requires constructs<11.0.0,>=10.0.0, but you have constructs 3.4.344 which is incompatible.
Successfully installed aws-cdk-core-1.204.0 aws-cdk.cx-api-1.204.0 aws-cdk.re


clear
clear
pip install 'aws-cdk-core==1.204.0' 'aws-cdk.cx-api==1.204.0' 'aws-cdk.region-info==1.204.0'
pip list | grep aws-cdk
cdk deploy
clear
cdk deploy
cd 
pip install --upgrade aws-cdk.core aws-cdk.aws-ecs aws-cdk.aws-ec2 aws-cdk.aws-iam aws-cdk.aws-elasticloadbalancingv2
cd ecs-devops-sandbox-cdk/
ls
cat app.py 
deactivate
rm -rf .env
clear
python -m venv .env
source .env/bin/activate
pip install -r requirements.txt
python -m venv .env
cd 
python -m venv .env
python3 -m venv .env
source .env/bin/activate
pip install -r requirements.txt
cd ecs-devops-sandbox-cdk/
ls
pip install -r requirements.txt
vi requirements.txt
ls
vi app.py 
vi ecs_devops_sandbox_cdk.py
ls
cd ecs_devops_sandbox_cdk/
vi ecs_devops_sandbox_cdk_stack.py 
cd 
deactivate
rm -rf .env
python3 -m venv .env
source .env/bin/activate
pip install -r requirements.txt
cd ecs-devops-sandbox-cdk/
deactivate
rm -rf .env
python3 -m venv .env
source .env/bin/activate
pip install -r requirements.txt
cdk deploy
aws configure
clear
cd ecs-devops-sandbox-cdk/
cd 
cdk deploy
cd ecs-devops-sandbox-cdk/
cdk deploy
clear
cdk deploy
cdk --version
source .env/bin/activate
pip install aws-cdk-lib
pip list
cdk deploy
[200~(.env) ubuntu@ip-172-31-10-214:~/ecs-devops-sandbox-cdk$ cdk deploy
✨  Synthesis time: 11.2s
Unable to resolve AWS account to use. It must be either configured when you define your CDK Stack, or through the environment~
[200~aws configure
aws configure
aws configure list
export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
export CDK_DEFAULT_REGION=us-east-1
cdk deploy
cat ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py 
vi ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py 
cat ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py 
cdk deploy
vi ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py 
source .env/bin/activate
cdk deploy
[200~pip list | grep aws-cdk
~
pip list | grep aws-cdk
pip install aws-cdk-lib==2.149.0
python --version
pip install -r requirements.txt
cdk deploy
cat ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py 
rm -rf .env
python -m venv .env
source .env/bin/activate
pip install -r requirements.txt
cd 
rm -rf .env
python -m venv .env
source .env/bin/activate
pip install -r requirements.txt
rm -rf .env
python -m venv .env
[200~python3 --version
~
python3 --version
python3 -m venv .env
source .env/bin/activate
cd ecs-devops-sandbox-cdk/
ls
cat requirements.txt 
pip install -r requirements.txt
pip list
cdk deploy
source .env/bin/activate
cd 
source .env/bin/activate
pip install -r requirements.txt --force-reinstall
cd ecs-devops-sandbox-cdk/
pip install -r requirements.txt --force-reinstall
./env/bin/python -m cdk deploy
cd
./env/bin/python -m cdk deploy
source .env/bin/activate
./env/bin/python -m cdk deploy
python3 -m venv .env
ls .env/bin/python
python3 -m venv .env
source .env/bin/activate
python -m cdk deploy
cd ecs-devops-sandbox-cdk/
python -m cdk deploy
cd 
python -m cdk deploy
clear
ls
cd ecs-devops-sandbox-cdk/
ls
cdk deploy 
ls
cat app.py 
cat ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py 
pip install aws-cdk-lib
python3 -m venv .venv
source .venv/bin/activate
pip install aws-cdk-lib
vi app.py 
vi ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py
cdk deploy
cdk bootstrap aws://258192220194/us-east-1
clear
ls
cat ecs-devops-sandbox-cdk/app.py 
cat ecs-devops-sandbox-cdk/ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py 
cd ecs-devops-sandbox-cdk/
cdk destroy
source .venv/bin/activate
cdk destroy
cdk list
cdk destroy --all
clear
cd ecs-devops-sandbox-cdk/
cdk deploy
source .env/bin/activate
cd 
source .env/bin/activate
cd ecs-devops-sandbox-cdk/
source .env/bin/activate
cdk deploy
cdk bootstrap
cdk deploy
cdk bootstrap aws://258192220194/us-east-1
cdk deploy
clear
cdk destroy
cdk destroy all
clear
cdk destroy 
cdk bootstrap aws://258192220194/us-east-1
clear
cd ecs-devops-sandbox-cdk/
cdk list
cd 
source .env/bin/activate
cd ecs-devops-sandbox-cdk/
cdk list
cdk destory all 
cdk destroy all 
cdk list
cdk destroy EcsDevopsSandboxCdkStack
cdk destroy
clear
source .env/bin/activate
cdk list
cd ecs-devops-sandbox-cdk/
cdk list
export AWS_DEFAULT_REGION=us-east-2
cdk bootstrap aws://258192220194/us-east-2
ls
cat app.py 
cat ecs_devops_sandbox_cdk/ecs_devops_sandbox_cdk_stack.py 
ll
cd ecs_devops_sandbox_cdk/
ls
cd ..
clerar
clear
cdk deploy 
clear
cd ecs-devops-sandbox-cdk/
ls
cd ecs_devops_sandbox_cdk/
ls
